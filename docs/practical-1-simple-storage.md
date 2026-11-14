
# Practical 1: Simple Storage Smart Contract

## Aim
To create, compile, deploy and test a Solidity smart contract using Remix IDE.

## Software and Tools
- Remix Desktop IDE
- Solidity compiler 0.8.20
- Remix JavaScript VM (Osaka)
- MetaMask (wallet created)

## Smart Contract
The contract is named `SimpleStorage.sol`.

It contains:
1. A private uint256 state variable named `number`.
2. A constructor to initialize the number.
3. A `setNumber()` function to update the value.
4. A `getNumber()` view function to retrieve the value.

## Procedure
1. Open Remix Desktop IDE.
2. Create `SimpleStorage.sol`.
3. Write the Solidity smart contract.
4. Select a compatible Solidity compiler (0.8.20).
5. Compile the contract and check for errors.
6. Select Remix VM as the deployment environment.
7. Deploy the contract with an initial constructor value of 100.
8. Call `setNumber()` with the value 250.
9. Call `getNumber()` to verify the updated value.

## Observations and Results

| Operation | Input | Result |
|---|---:|---:|
| Constructor | 100 | Initial value stored |
| setNumber() | 250 | Value updated |
| getNumber() | None | 250 |

## Transaction Details
- Deployment constructor argument: 100 (hexadecimal: 0x64).
- setNumber transaction argument: 250 (hexadecimal: 0xfa).
- getNumber returned: 250.
- Network: Remix JavaScript VM (Osaka).
- Transaction hashes: Not recorded.

## Screenshots
1. `../screenshots/SimpleStorage-code.png`
2. `../screenshots/SimpleStorage-compile.png`
3. `../screenshots/SimpleStorage-deploy1.png`
4. `../screenshots/SimpleStorage-deploy2.png`
5. `../screenshots/SimpleStorage-test.png`
6. `../screenshots/SimpleStorage-test2.png`
7. `../screenshots/SimpleStorage-test3.png`
8. `../screenshots/SimpleStorage-transaction.png`

## Conclusion
The SimpleStorage smart contract was successfully compiled and deployed in Remix IDE. The setNumber() function successfully updated the stored value from 100 to 250, and getNumber() returned 250.