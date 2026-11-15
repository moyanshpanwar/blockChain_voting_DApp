# blockChain_voting_DApp

## Project Overview

A blockchain-based project developed as part of the Blockchain Technology laboratory coursework, exploring smart contract development, deployment, and decentralized application architecture using the Ethereum ecosystem.

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
├── docs/
│   ├── practical-1-simple-storage.md
│   ├── practical-2-voting.md
│   └── practical-3-voting-frontend.md
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── contract.js
│       └── app.js
├── screenshots/
│   ├── simple-storage/
│   ├── voting/
│   └── voting-frontend/
├── .gitignore
└── README.md
```

*Additional smart contracts, frontend components, and documentation will be added as development progresses.*

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

