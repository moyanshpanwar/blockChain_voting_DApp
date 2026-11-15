
window.CONTRACT_CONFIG = {
    // Deployed Voting smart contract on Sepolia
    address: "0x8e75689c6a58A9051bb692526B113aB40b2cdaC3",

    // Ethereum Sepolia Testnet
    chainId: 11155111,
    networkName: "Sepolia",

    // Ethers.js v6 human-readable ABI
    abi: [
        "function vote(uint256 candidateId)",
        "function getCandidate(uint256 candidateId) view returns (uint256 id, string name, uint256 voteCount)",
        "function getCandidateCount() view returns (uint256)",
        "function hasVoted(address voter) view returns (bool)",
        "event VoteCast(address indexed voter, uint256 indexed candidateId, string candidateName)"
    ]
};
