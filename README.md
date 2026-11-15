# BlockChain_Voting_DApp

## Project Overview

A blockchain-based project developed as part of the Blockchain Technology laboratory coursework, exploring smart contract development, deployment, and decentralized application architecture using the Ethereum ecosystem.

## Testnet Resources

The VOTEX DApp uses the **Ethereum Sepolia Testnet** for deployment and transaction testing. Sepolia ETH is required to pay gas fees when interacting with the smart contract.

### Sepolia ETH Faucet

- **Google Cloud Web3 Faucet:** https://cloud.google.com/application/web3/faucet/ethereum/sepolia
- Provides free test ETH for Ethereum Sepolia.
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
- Deployed and tested the contract on the Ethereum Sepolia testnet.
- Verified smart contract deployment and transactions using Etherscan.

**Testing and Validation:**

- Successfully initialized the contract with a value of 100.
- Updated the stored value to 250.
- Verified the updated state through read-only contract interaction.
- Tested contract functionality in both local virtual and public testnet environments.

**Documentation:** Practical procedures, observations, transaction evidence, and screenshots are maintained in the project repository.

### Practical 2: Decentralized Voting DApp

**Status: Completed**

Developing a decentralized voting application that demonstrates blockchain-based voting and transparent result management.

**Planned Features:**

- Solidity-based voting smart contract.
- Candidate registration and management.
- Voting period management.
- MetaMask wallet integration.
- One-vote-per-wallet enforcement.
- Duplicate-vote prevention.
- On-chain vote counting and result retrieval.
- Interactive and responsive web interface.

## Technology Stack

| Category                | Technologies            |
| ----------------------- | ----------------------- |
| Smart Contracts         | Solidity                |
| Development Environment | Remix IDE               |
| Blockchain Network      | Ethereum                |
| Test Network            | Sepolia                 |
| Wallet Integration      | MetaMask, WalletConnect |
| Frontend                | HTML, CSS, JavaScript   |
| Blockchain Interaction  | Ethers.js               |
| Version Control         | Git, GitHub             |

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

- [ ] Develop and compile SimpleStorage smart contract.
- [ ] Deploy and test using Remix JavaScript VM.
- [ ] Deploy and test using Ethereum Sepolia testnet.
- [ ] Verify contract functionality and transaction execution.
- [ ] Document implementation and testing results.
- [ ] Develop decentralized voting smart contract.
- [ ] Implement voting DApp frontend.
- [ ] Integrate MetaMask and Ethers.js.
- [ ] Test voting functionality and duplicate-vote prevention.
- [ ] Deploy and demonstrate the completed voting application.

---


## Blockchain Transaction & Verification Links

The following resources provide access to blockchain transaction records, deployed smart contracts, and source-code verification associated with the development and testing of this project on the Ethereum Sepolia Testnet.

### Practical 1 – Simple Storage

- [Sepolia Block Explorer](https://eth-sepolia.blockscout.com/) – Used to search for and inspect the SimpleStorage contract deployment and stored-value update transactions.

### Practical 2 – Voting Smart Contract

- [Sepolia Block Explorer](https://eth-sepolia.blockscout.com/) – Used to search for and inspect the Voting smart contract deployment and its blockchain activity.

### Practical 3 – VOTEX Frontend Integration

- [Voting Smart Contract on Blockscout](https://eth-sepolia.blockscout.com/address/0x8e75689c6a58A9051bb692526B113aB40b2cdaC3) – Used to inspect the deployed Voting smart contract, its transaction history, and on-chain activity.
- [Verified Contract Source Code on Sourcify](https://repo.sourcify.dev/11155111/0x8e75689c6a58A9051bb692526B113aB40b2cdaC3/) – Used to verify the deployed smart contract source code against its on-chain bytecode.

### Practical 4 – DApp Testing

- [Successful Voting Transaction on Blockscout](https://eth-sepolia.blockscout.com/tx/0x2da6ad6aca459951dde7302e0885358f693b388f0b9d08894cec915e33e55e7e) – Used to verify the successful voting transaction, transaction status, gas consumption, and emitted voting event.

### General Blockchain Resource

- [Ethereum Sepolia Block Explorer – Blockscout](https://eth-sepolia.blockscout.com/) – Provides access to blockchain blocks, transactions, smart contracts, and network activity.

**Note:** Transactions performed using Remix JavaScript VM are local development transactions and cannot be inspected through public blockchain explorers. The Sepolia Testnet is used for public transaction verification without spending real ETH.