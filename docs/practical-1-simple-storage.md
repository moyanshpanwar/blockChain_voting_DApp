
# Practical 1: Simple Storage Smart Contract

## Aim
To create, compile, deploy and test a Solidity smart contract using Remix IDE, first in Remix JavaScript VM and then on the Sepolia Ethereum testnet.

## Software and Tools
- Remix Desktop IDE
- Remix Web IDE
- Solidity compiler 0.8.20
- Remix JavaScript VM (Osaka)
- MetaMask (wallet created)
- WalletConnect
- Sepolia Ethereum Testnet
- Sepolia Etherscan

## Smart Contract
The contract is named `SimpleStorage.sol`.

It contains:
1. A private uint256 state variable named `number`.
2. A constructor to initialize the number.
3. A `setNumber()` function to update the value.
4. A `getNumber()` view function to retrieve the value.

## Procedure

### Part A: Deployment Using Remix JavaScript VM
1. Open Remix Desktop IDE.
2. Create `SimpleStorage.sol`.
3. Write the Solidity smart contract.
4. Select a compatible Solidity compiler (0.8.20).
5. Compile the contract and check for errors.
6. Select Remix VM as the deployment environment.
7. Deploy the contract with an initial constructor value of 100.
8. Call `setNumber()` with the value 250.
9. Call `getNumber()` to verify the updated value.

### Part B: Deployment Using Sepolia Testnet
1. Open Remix Web IDE.
2. Connect MetaMask using WalletConnect.
3. Select the Sepolia test network (Chain ID: 11155111).
4. Ensure the wallet has sufficient Sepolia test ETH.
5. Upload and compile `SimpleStorage.sol`.
6. Deploy the contract with an initial constructor value of 100.
7. Confirm the deployment transaction in MetaMask.
8. Verify the deployed contract and its address on Sepolia Etherscan.
9. Attach Remix to the deployed contract using its address.
10. Call `getNumber()` and verify the initial value is 100.
11. Call `setNumber()` with the value 250 and confirm the transaction.
12. Call `getNumber()` again and verify that the updated value is 250.

## Observations and Results

### Remix JavaScript VM

| Operation | Input | Result |
|---|---:|---|
| Constructor | 100 | Initial value stored |
| setNumber() | 250 | Value updated |
| getNumber() | None | 250 |

### Sepolia Testnet

| Operation | Input | Result |
|---|---:|---|
| Contract deployment | 100 | Successful |
| getNumber() | None | 100 |
| setNumber() | 250 | Successful |
| getNumber() | None | 250 |

## Transaction Details

### Remix JavaScript VM
- Deployment constructor argument: 100 (hexadecimal: `0x64`).
- `setNumber()` transaction argument: 250 (hexadecimal: `0xfa`).
- `getNumber()` returned: 250.
- Network: Remix JavaScript VM (Osaka).
- Transaction hashes: Not recorded.

### Sepolia Testnet
- Network: Sepolia Ethereum Testnet.
- Chain ID: 11155111.
- Deployer address: `0x2EeE62D847B0226fB92C981F279ebEcaE762497C`
- Contract address: `0x979caaa7726fc381ebc3f5e8b9241299b6ebe43c`
- Initial constructor argument: 100.
- Updated value: 250.

**Deployment Transaction Hash:**

`0x15655cbe702c5c04acb9889f83a935fa6a9936394de686ff0d459d5eff0e0459`

**setNumber() Transaction Hash:**

`0x78606c9c8d572b2ae3544dc1ef035488ad8b2adadb6c4a1a78c79232a44ef9ff`

**Verification:** The deployment and update transactions were successful on Sepolia Etherscan. The final `getNumber()` call returned 250.

## Screenshots

All screenshots are stored in `screenshots/simple-storage/`.

### A. Remix VM Deployment and Testing

1. `SimpleStorage-code.png` – Solidity source code.
2. `SimpleStorage-compile.png` – Successful compilation.
3. `SimpleStorage-deploy1.png` – Contract deployment.
4. `SimpleStorage-deploy2.png` – Deployment details.
5. `SimpleStorage-test.png` – Initial and updated value testing.
6. `SimpleStorage-test2.png` – Transaction cost details.
7. `SimpleStorage-test3.png` – Execution cost details.
8. `SimpleStorage-transaction.png` – Transaction evidence.

### B. Sepolia Testnet Deployment and Testing

1. `SimpleStorage-Sepolia-deploy1.png` – Contract deployment on Sepolia.
2. `SimpleStorage-Sepolia-deploy-transaction1.png` – Deployment transaction evidence.
3. `SimpleStorage-Sepolia-deploy-transaction2.png` – Deployment transaction details.
4. `SimpleStorage-Sepolia-test1.png` – Contract testing on Sepolia.
5. `SimpleStorage-Sepolia-test1-transaction1.png` – `setNumber()` transaction evidence.
6. `SimpleStorage-Sepolia-test1-transaction2.png` – Transaction details on Etherscan.
7. `SimpleStorage-Sepolia-transactions.png` – Sepolia wallet transaction history.

## Conclusion

The SimpleStorage smart contract was successfully compiled, deployed and tested using Remix JavaScript VM and the Sepolia Ethereum testnet.

The `setNumber()` function successfully updated the stored value from 100 to 250, and `getNumber()` returned 250 in both environments. The Sepolia deployment and transaction records were also verified using Etherscan.
