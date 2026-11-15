
/* =========================================
   VOTEX - DECENTRALIZED VOTING APPLICATION
   Built with Ethers.js v6
========================================= */

const CONFIG = window.CONTRACT_CONFIG;

let provider = null;
let signer = null;
let votingContract = null;
let currentAccount = null;
let hasAlreadyVoted = false;


// DOM ELEMENTS
const connectWalletBtn = document.getElementById("connectWalletBtn");
const walletAddress = document.getElementById("walletAddress");
const walletStatus = document.getElementById("walletStatus");

const totalCandidatesElement = document.getElementById("totalCandidates");
const totalVotesElement = document.getElementById("totalVotes");
const votingStatusElement = document.getElementById("votingStatus");
const votingStatusDescription = document.getElementById("votingStatusDescription");

const candidateList = document.getElementById("candidateList");
const resultsList = document.getElementById("resultsList");

const transactionPanel = document.getElementById("transactionPanel");
const transactionIcon = document.getElementById("transactionIcon");
const transactionTitle = document.getElementById("transactionTitle");
const transactionMessage = document.getElementById("transactionMessage");

const notification = document.getElementById("notification");
const notificationIcon = document.getElementById("notificationIcon");
const notificationMessage = document.getElementById("notificationMessage");

const networkIndicator = document.getElementById("networkIndicator");
const networkName = document.getElementById("networkName");


// =========================================
// NOTIFICATION SYSTEM
// =========================================

let notificationTimeout;

function showNotification(message, type = "info") {
    notification.classList.remove("hidden");

    notificationMessage.textContent = message;

    const icons = {
        success: "fa-circle-check",
        error: "fa-circle-exclamation",
        info: "fa-circle-info"
    };

    notificationIcon.className = `fa-solid ${icons[type] || icons.info}`;

    notification.style.borderColor =
        type === "success" ? "rgba(50,214,160,0.4)" :
        type === "error" ? "rgba(255,107,125,0.4)" :
        "rgba(86,133,255,0.3)";

    clearTimeout(notificationTimeout);

    notificationTimeout = setTimeout(() => {
        notification.classList.add("hidden");
    }, 4500);
}


// =========================================
// TRANSACTION STATUS
// =========================================

function updateTransactionStatus(title, message, type = "pending") {
    transactionPanel.classList.remove("hidden");

    transactionTitle.textContent = title;
    transactionMessage.textContent = message;

    const icons = {
        pending: "fa-clock",
        success: "fa-circle-check",
        error: "fa-circle-exclamation"
    };

    transactionIcon.innerHTML =
        `<i class="fa-solid ${icons[type] || icons.pending}"></i>`;

    transactionIcon.style.color =
        type === "success" ? "#32d6a0" :
        type === "error" ? "#ff6b7d" :
        "#8eaaff";
}


// =========================================
// WALLET ADDRESS FORMATTING
// =========================================

function shortenAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}


// =========================================
// NETWORK VALIDATION
// =========================================

async function checkNetwork() {
    if (!provider) return false;

    const network = await provider.getNetwork();

    const correctNetwork =
        Number(network.chainId) === CONFIG.chainId;

    networkName.textContent = correctNetwork
        ? CONFIG.networkName + " Testnet"
        : "Wrong Network";

    networkIndicator.style.background =
        correctNetwork ? "#32d6a0" : "#ff6b7d";

    networkIndicator.style.boxShadow =
        correctNetwork
            ? "0 0 10px rgba(50,214,160,0.5)"
            : "0 0 10px rgba(255,107,125,0.5)";

    return correctNetwork;
}


// =========================================
// WALLET CONNECTION
// =========================================

async function connectWallet() {

    if (!window.ethereum) {
        showNotification(
            "MetaMask is not installed. Please install the MetaMask extension.",
            "error"
        );
        return;
    }

    try {
        connectWalletBtn.disabled = true;
        connectWalletBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Connecting...';

        provider = new ethers.BrowserProvider(window.ethereum);

        const accounts = await provider.send(
            "eth_requestAccounts",
            []
        );

        if (!accounts.length) {
            throw new Error("No wallet account was selected.");
        }

        currentAccount = ethers.getAddress(accounts[0]);

        signer = await provider.getSigner();

        const correctNetwork = await checkNetwork();

        if (!correctNetwork) {
            currentAccount = null;
            signer = null;
            votingContract = null;

            walletAddress.textContent =
                "Please switch MetaMask to Sepolia Testnet.";

            walletStatus.innerHTML =
                '<span class="status-dot" style="background:#ff6b7d"></span> Wrong Network';

            showNotification(
                "Wrong network. Please switch MetaMask to Sepolia.",
                "error"
            );

            return;
        }

        votingContract = new ethers.Contract(
            CONFIG.address,
            CONFIG.abi,
            signer
        );

        walletAddress.textContent =
            `Connected: ${shortenAddress(currentAccount)}`;

        walletStatus.innerHTML =
            '<span class="status-dot"></span> Connected';

        connectWalletBtn.innerHTML =
            '<i class="fa-solid fa-wallet"></i> ' +
            shortenAddress(currentAccount);

        showNotification(
            "Wallet connected successfully!",
            "success"
        );

        await loadElectionData();

    } catch (error) {
        if (error.code === 4001) {
            showNotification(
                "Wallet connection was rejected.",
                "error"
            );
        } else {
            console.error("Wallet connection error:", error);

            showNotification(
                error.message || "Unable to connect wallet.",
                "error"
            );
        }

    } finally {
        connectWalletBtn.disabled = false;

        if (!currentAccount) {
            connectWalletBtn.innerHTML =
                '<i class="fa-solid fa-wallet"></i> Connect Wallet';
        }
    }
}


// =========================================
// LOAD ELECTION DATA
// =========================================

async function loadElectionData() {

    if (!votingContract) return;

    try {
        const count = Number(
            await votingContract.getCandidateCount()
        );

        const candidates = [];
        let totalVotes = 0;

        for (let id = 1; id <= count; id++) {

            const candidate =
                await votingContract.getCandidate(id);

            const candidateData = {
                id: Number(candidate.id),
                name: candidate.name,
                voteCount: Number(candidate.voteCount)
            };

            candidates.push(candidateData);

            totalVotes += candidateData.voteCount;
        }

        totalCandidatesElement.textContent = count;
        totalVotesElement.textContent = totalVotes;

        if (currentAccount) {
            hasAlreadyVoted =
                await votingContract.hasVoted(currentAccount);

            votingStatusElement.textContent =
                hasAlreadyVoted ? "Voted" : "Not Voted";

            votingStatusDescription.textContent =
                hasAlreadyVoted
                    ? "Your vote is recorded on-chain"
                    : "You are eligible to vote";
        }

        renderCandidates(candidates);
        renderResults(candidates, totalVotes);

    } catch (error) {
        console.error("Election data error:", error);

        showNotification(
            "Unable to load election data from the smart contract.",
            "error"
        );
    }
}


// =========================================
// RENDER CANDIDATE CARDS
// =========================================

function renderCandidates(candidates) {

    candidateList.innerHTML = "";

    candidates.forEach(candidate => {

        const card = document.createElement("article");
        card.className = "candidate-card";

        const buttonDisabled = hasAlreadyVoted;

        card.innerHTML = `
            <div class="candidate-card-top">
                <div class="candidate-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>

                <span class="candidate-id">
                    CANDIDATE #${candidate.id}
                </span>
            </div>

            <h3>${escapeHTML(candidate.name)}</h3>

            <p class="candidate-description">
                Registered participant in the decentralized election.
            </p>

            <div class="candidate-vote-info">
                <span>
                    <i class="fa-solid fa-chart-simple"></i>
                    Current votes
                </span>

                <strong>${candidate.voteCount}</strong>
            </div>

            <button
                class="vote-button"
                data-candidate-id="${candidate.id}"
                ${buttonDisabled ? "disabled" : ""}
            >
                ${
                    hasAlreadyVoted
                        ? "Already Voted"
                        : '<i class="fa-solid fa-check"></i> Cast Your Vote'
                }
            </button>
        `;

        const voteButton = card.querySelector(".vote-button");

        voteButton.addEventListener("click", () => {
            castVote(candidate.id, candidate.name, voteButton);
        });

        candidateList.appendChild(card);
    });
}


// =========================================
// RENDER LIVE RESULTS
// =========================================

function renderResults(candidates, totalVotes) {

    resultsList.innerHTML = "";

    if (candidates.length === 0) {
        resultsList.textContent = "No candidates found.";
        return;
    }

    candidates.forEach(candidate => {

        const percentage = totalVotes > 0
            ? (candidate.voteCount / totalVotes) * 100
            : 0;

        const row = document.createElement("div");
        row.className = "result-row";

        row.innerHTML = `
            <div class="result-info">
                <span>${escapeHTML(candidate.name)}</span>
                <strong>${candidate.voteCount} votes</strong>
            </div>

            <div
                class="result-progress"
                role="progressbar"
                aria-valuenow="${percentage.toFixed(1)}"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="${escapeHTML(candidate.name)} vote share"
            >
                <div
                    class="result-progress-fill"
                    style="width: ${percentage}%"
                ></div>
            </div>

            <span class="result-percentage">
                ${percentage.toFixed(1)}%
            </span>
        `;

        resultsList.appendChild(row);
    });
}


// =========================================
// HTML ESCAPING
// =========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


// =========================================
// CAST VOTE
// =========================================

async function castVote(candidateId, candidateName, button) {

    if (!votingContract || !currentAccount) {
        showNotification(
            "Please connect your MetaMask wallet first.",
            "error"
        );
        return;
    }

    if (hasAlreadyVoted) {
        showNotification(
            "This wallet has already voted.",
            "error"
        );
        return;
    }

    try {
        const correctNetwork = await checkNetwork();

        if (!correctNetwork) {
            showNotification(
                "Please switch to Sepolia Testnet.",
                "error"
            );
            return;
        }

        const alreadyVoted =
            await votingContract.hasVoted(currentAccount);

        if (alreadyVoted) {
            hasAlreadyVoted = true;
            await loadElectionData();

            showNotification(
                "This wallet has already voted.",
                "error"
            );
            return;
        }

        button.disabled = true;
        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Confirm in Wallet';

        updateTransactionStatus(
            "Awaiting Wallet Confirmation",
            `Confirm your vote for ${candidateName} in MetaMask.`,
            "pending"
        );

        const transaction =
            await votingContract.vote(candidateId);

        updateTransactionStatus(
            "Transaction Submitted",
            `Transaction hash: ${transaction.hash}`,
            "pending"
        );

        showNotification(
            "Vote submitted! Waiting for blockchain confirmation.",
            "info"
        );

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

        const receipt = await transaction.wait();

        if (!receipt || receipt.status !== 1) {
            throw new Error("The voting transaction failed.");
        }

        hasAlreadyVoted = true;

        updateTransactionStatus(
            "Vote Successfully Recorded",
            `Your vote for ${candidateName} has been confirmed on Sepolia.`,
            "success"
        );

        showNotification(
            "Your vote has been successfully recorded!",
            "success"
        );

        await loadElectionData();

    } catch (error) {

        console.error("Voting error:", error);

        if (error.code === 4001) {
            showNotification(
                "You rejected the transaction in MetaMask.",
                "error"
            );

            updateTransactionStatus(
                "Transaction Rejected",
                "The wallet request was rejected. No vote was submitted.",
                "error"
            );

        } else {
            const message =
                error.reason ||
                error.shortMessage ||
                error.message ||
                "An unexpected error occurred.";

            showNotification(message, "error");

            updateTransactionStatus(
                "Transaction Failed",
                message,
                "error"
            );
        }

        if (currentAccount) {
            try {
                hasAlreadyVoted =
                    await votingContract.hasVoted(currentAccount);

                await loadElectionData();
            } catch (refreshError) {
                console.error("Refresh error:", refreshError);
            }
        }

    } finally {
        if (button && !hasAlreadyVoted) {
            button.disabled = false;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Cast Your Vote';
        }
    }
}


// =========================================
// WALLET ACCOUNT CHANGE LISTENER
// =========================================

if (window.ethereum) {

    window.ethereum.on("accountsChanged", async (accounts) => {

        if (!accounts.length) {

            currentAccount = null;
            signer = null;
            votingContract = null;
            hasAlreadyVoted = false;

            walletAddress.textContent =
                "Connect your MetaMask wallet to participate.";

            walletStatus.innerHTML =
                '<span class="status-dot"></span> Not Connected';

            connectWalletBtn.innerHTML =
                '<i class="fa-solid fa-wallet"></i> Connect Wallet';

            totalCandidatesElement.textContent = "--";
            totalVotesElement.textContent = "--";
            votingStatusElement.textContent = "--";
            votingStatusDescription.textContent =
                "Connect wallet to check";

            candidateList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <i class="fa-solid fa-cube"></i>
                    </div>
                    <h3>Wallet Disconnected</h3>
                    <p>Connect your wallet to load election information.</p>
                </div>
            `;

            resultsList.innerHTML = `
                <div class="results-empty">
                    <i class="fa-solid fa-chart-simple"></i>
                    <p>Connect your wallet to view election results.</p>
                </div>
            `;

            return;
        }

        provider = new ethers.BrowserProvider(window.ethereum);

        currentAccount = ethers.getAddress(accounts[0]);

        signer = await provider.getSigner();

        if (await checkNetwork()) {

            votingContract = new ethers.Contract(
                CONFIG.address,
                CONFIG.abi,
                signer
            );

            walletAddress.textContent =
                `Connected: ${shortenAddress(currentAccount)}`;

            walletStatus.innerHTML =
                '<span class="status-dot"></span> Connected';

            connectWalletBtn.innerHTML =
                '<i class="fa-solid fa-wallet"></i> ' +
                shortenAddress(currentAccount);

            await loadElectionData();

        } else {
            votingContract = null;
            showNotification(
                "Please switch MetaMask to Sepolia Testnet.",
                "error"
            );
        }
    });


    // NETWORK CHANGE LISTENER

    window.ethereum.on("chainChanged", () => {
        window.location.reload();
    });
}


// =========================================
// EVENT LISTENERS
// =========================================

connectWalletBtn.addEventListener("click", connectWallet);
