# BlockChain_Voting_DApp

## Contributer

**Name -- MOYANSH PANWAR**

## Project Overview

VOTEX is a blockchain-based decentralized voting application developed as part of the Blockchain Technology laboratory coursework. The project explores Solidity smart contract development, Ethereum testnet deployment, wallet integration, frontend development, and blockchain transaction verification.

The application enables users to connect an Ethereum wallet, view candidates, cast a vote, and verify voting results recorded on the blockchain.

## Testnet Resources

The VOTEX DApp is deployed and tested on the **Ethereum Sepolia Testnet**. Sepolia ETH is required to pay gas fees when interacting with the smart contract.

### Sepolia ETH Faucet

- **[Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)** – Provides free test ETH for Ethereum Sepolia.
- Each Google Account and wallet address is eligible for one drip every 24 hours.
- Test ETH has no real monetary value and is intended only for development and testing.

**Note:** Faucet availability and eligibility restrictions may apply. If a request is temporarily unavailable, try again after the cooldown period.

## Project Progress

### Practical 1: Simple Storage Smart Contract

**Status: Completed**

Designed, deployed, and tested a Solidity-based smart contract using Remix IDE.

**Key Implementations:**

- Developed a smart contract using Solidity with state variables, constructors, and functions.
- Implemented state modification and data retrieval using `setNumber()` and `getNumber()`.
- Compiled and deployed the contract using Remix JavaScript VM.
- Deployed and tested the contract on the Ethereum Sepolia Testnet.
- Verified contract deployment and blockchain transactions using a block explorer.

**Testing and Validation:**

- Successfully initialized the contract with a value of 100.
- Updated the stored value to 250.
- Verified the updated state through read-only contract interaction.
- Tested contract functionality in both local virtual and public testnet environments.

### Practical 2: Decentralized Voting Smart Contract

**Status: Completed**

Designed and deployed a Solidity-based voting smart contract that records votes on the Ethereum blockchain.

**Key Implementations:**

- Created a `Candidate` structure to store candidate information and vote counts.
- Initialized three candidates through the contract constructor.
- Implemented voting functionality using `vote()`.
- Implemented candidate information retrieval using `getCandidate()`.
- Implemented candidate count retrieval using `getCandidateCount()`.
- Used a mapping to prevent an Ethereum address from voting more than once.
- Implemented `hasVoted()` to check whether an address has already voted.
- Emitted a `VoteCast` event when a vote is successfully recorded.

**Testing and Validation:**

- Tested candidate information retrieval.
- Verified successful voting from different accounts.
- Tested duplicate-vote prevention.
- Tested invalid candidate ID rejection.
- Verified emitted voting events and updated vote counts.

### Practical 3: VOTEX Frontend Integration

**Status: Completed**

Developed a professional web interface and integrated it with the deployed voting smart contract.

**Key Implementations:**

- Created a responsive frontend using HTML, CSS, and JavaScript.
- Integrated MetaMask wallet connectivity.
- Used Ethers.js to interact with the deployed smart contract.
- Implemented Ethereum Sepolia network detection.
- Displayed candidate information and live voting results.
- Implemented wallet-based voting and transaction confirmation.
- Displayed transaction status and voting eligibility.
- Disabled voting options after an account successfully voted.
- Added handling for wallet connection issues, rejected transactions, and incorrect network selection.

**Testing and Validation:**

- Successfully connected MetaMask to the VOTEX application.
- Retrieved candidate information from the deployed contract.
- Cast a vote through the frontend.
- Verified transaction confirmation and updated voting results.
- Confirmed that an account could not vote again through the frontend.

### Practical 4: Testing and Analysis of the Voting DApp

**Status: Completed**

Performed functional testing and analysis of the deployed voting DApp on the Ethereum Sepolia Testnet.

**Experiments Conducted:**

- **Experiment A – Successful Voting:** Verified successful voting, transaction confirmation, gas consumption, and updated candidate vote count.
- **Experiment B – Duplicate Voting:** Tested duplicate-vote prevention and verified that an already-voted account could not vote again.
- **Experiment C – Voting from Another Account:** Used a second funded Ethereum account to cast a vote successfully.
- **Experiment D – Invalid Candidate ID:** Tested an invalid candidate ID and verified that the transaction was rejected before submission.

**Final Voting Results After Experiment C:**

| Candidate | Votes |
|---|---:|
| Candidate A | 1 |
| Candidate B | 1 |
| Candidate C | 0 |
| **Total Votes** | **2** |

**Testing Evidence:**

- Transaction hashes and gas usage.
- Blockchain event verification.
- Screenshots of wallet connection and voting activity.
- Screenshots of successful voting and updated results.
- Evidence of duplicate-vote prevention and invalid candidate rejection.

## Technology Stack

| Category | Technologies |
|---|---|
| Smart Contracts | Solidity |
| Development Environment | Remix IDE |
| Blockchain Network | Ethereum |
| Test Network | Sepolia |
| Wallet Integration | MetaMask, WalletConnect |
| Frontend | HTML, CSS, JavaScript |
| Blockchain Interaction | Ethers.js |
| Version Control | Git, GitHub |
| Block Explorer | Blockscout |

## Repository Structure

```text
blockChain_voting_DApp/
├── contracts/
│   ├── SimpleStorage.sol
│   └── Voting.sol
│
├── docs/
│   ├── practical-1-simple-storage.md
│   ├── practical-2-voting.md
│   ├── practical-3-voting-frontend.md
│   └── practical-4-DApp-testing.md
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── contract.js
│       └── app.js
│
├── screenshots/
│   ├── simple-storage/
│   ├── voting/
│   ├── voting-frontend/
│   └── Testing-DApp/
│
├── .gitignore
└── README.md
```

## Development Roadmap

- Develop and compile the SimpleStorage smart contract.
- Deploy and test using Remix JavaScript VM.
- Deploy and test using Ethereum Sepolia Testnet.
- Verify contract functionality and transaction execution.
- Document implementation and testing results.
- Develop the decentralized voting smart contract.
- Implement the VOTEX frontend.
- Integrate MetaMask and Ethers.js.
- Test voting functionality and duplicate-vote prevention.
- Deploy and demonstrate the completed voting application.
- Perform functional testing and document the results.

---

## Blockchain Transaction & Verification Links

The following resources provide access to blockchain transaction records, deployed smart contracts, and source-code verification associated with the project on the Ethereum Sepolia Testnet.

### Practical 1 – Simple Storage

- [Sepolia Block Explorer – Blockscout](https://eth-sepolia.blockscout.com/) – Used to search for and inspect the SimpleStorage contract deployment and stored-value update transactions.

### Practical 2 – Voting Smart Contract

- [Sepolia Block Explorer – Blockscout](https://eth-sepolia.blockscout.com/) – Used to search for and inspect the Voting smart contract deployment and its blockchain activity.

### Practical 3 – VOTEX Frontend Integration

- [Voting Smart Contract on Blockscout](https://eth-sepolia.blockscout.com/address/0x8e75689c6a58A9051bb692526B113aB40b2cdaC3) – Used to inspect the deployed Voting smart contract, its transaction history, and on-chain activity.
- [Verified Contract Source Code on Sourcify](https://repo.sourcify.dev/11155111/0x8e75689c6a58A9051bb692526B113aB40b2cdaC3/) – Used to verify the deployed smart contract source code against its on-chain bytecode.

### Practical 4 – DApp Testing

- [Successful Voting Transaction – Candidate A](https://eth-sepolia.blockscout.com/tx/0x2da6ad6aca459951dde7302e0885358f693b388f0b9d08894cec915e33e55e7e) – Used to verify the successful voting transaction, transaction status, gas consumption, and emitted voting event.
- [Successful Voting Transaction – Candidate B](https://eth-sepolia.blockscout.com/tx/0x1d98b18c4ec0394595900963f5e88b08da2cd8b4af0d359e41597206ba21613a) – Used to verify voting from the second Ethereum account and inspect its transaction details and voting event.

### General Blockchain Resource

- [Ethereum Sepolia Block Explorer – Blockscout](https://eth-sepolia.blockscout.com/) – Provides access to blockchain blocks, transactions, smart contracts, and network activity.

**Note:** Transactions performed using Remix JavaScript VM are local development transactions and cannot be inspected through public blockchain explorers. The Sepolia Testnet is used for public transaction verification without spending real ETH.

## Project Status

**VOTEX development, Sepolia deployment, frontend integration, and all four practical testing exercises have been completed.**