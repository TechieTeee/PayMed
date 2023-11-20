# PayMed
![PayMed Logo](https://github.com/TechieTeee/PayMed/assets/100870737/5af66eb1-dc59-49ea-a909-58891864465f)

## Background
PayMed is a decentralized application (DApp) that aims to revolutionize healthcare payments by leveraging blockchain technology. The project addresses the challenges in the current healthcare payment landscape, such as high medical debt, complex payment processes, and lack of transparency.

## Problem
With more than $923 billion dollars of medical debt in the U.S. and similar challenges to affordable healthcare globally, the healthcare industry faces significant issues, including staggering medical debt, in-network requirements, variable copays, and deductibles. These challenges make it difficult for patients to access preferred healthcare professionals at reasonable prices. Additionally, issues like fraud and lack of transparency contribute to the financial strain associated with medical expenses.

## Solution
PayMed introduces a solution by utilizing blockchain technology, smart contracts, and decentralized finance (DeFi) principles. The core features of the PayMed DApp include:

- **Smart Contracts (Solidity):** Implements the core logic of the DApp using Solidity, the programming language for Ethereum smart contracts.

- **Access Control (Ownable):** Utilizes OpenZeppelin's Ownable contract for access control, ensuring that certain functions can only be executed by the owner of the smart contract.

- **Blockchain Integration (Ethereum):** The smart contract is deployed on the Ethereum blockchain, providing a decentralized and secure environment for trustless transactions and data storage.

- **Decentralized File Storage (IPFS):** Utilizes IPFS for decentralized and distributed file storage, storing and retrieving the IPFS hash of files associated with each payment.

- **Off-chain Scaling (zkSync):** Integrates zkSync for off-chain scaling of Ethereum transactions, allowing for faster and cheaper transactions while maintaining security.

- **Oracle Integration (Arx Oracle):** Integrates an oracle (Arx Oracle) to provide the smart contract with real-world data, such as exchange rates, bridging the gap between the blockchain and external data sources.

- **Subgraph (USDC Subgraph):** Uses a subgraph to index and query data related to USDC transactions, enhancing the efficiency of retrieving information from the blockchain.

- **Lens:** Shareable and discoverable profiles

- **Events:** Emits events throughout the contract to provide a transparent and verifiable record of important actions, such as payments made, funds deposited, and funds withdrawn.

- **Community Wallet:** Introduces the concept of a community wallet to facilitate collective funding and withdrawals for cash assistance.

- **Rust Smart Contract:** Implements a separate smart contract written in Rust, possibly for another blockchain, providing additional privacy for credentials and an alternative option for users.

- **NextJS and Tailwind:** Utilizes NextJS for the frontend framework and Tailwind CSS for styling to create an engaging and responsive user interface.

- **Celo and Polygon Integration:** Extends support for Celo and Polygon testnets, providing interoperability across different blockchain ecosystems.

- **Remix for Smart Contract Deployment:** Utilizes Remix for deploying smart contracts to various testnets, ensuring a streamlined and efficient deployment process.

- **Gnosis for Community Wallet:** Integrates Gnosis for the community wallet, enhancing security and governance features for collective fund management.

- **Global Poverty Relief:** Aligns with UNICEF goals for global poverty relief, contributing to a more inclusive and equitable healthcare system.

## Deployments

### Celo Testnet
- **Transaction Hash:** [0xacd3f33206eecb782e4a5c0cc05a6474a2043a6154f09a95aea30e1da15049c2](#)
- **Contract Address:** [0x4B4C43fA23455e1c3F1F55E75f080B3eae96975C](#)

### Polygon Testnet
- **Transaction Hash:** [0x1efda7c91b3c869085fa983fac57da9191af6ff5cc63caf5affa508a81476184](#)
- **Contract Address:** [0xf8349a430f7b05cbec0fb0b003e453e99e5c489c73b1abff4f636c2a8ddb4268](#)

### FEVM Testnet
- **RPC Issue:** Occurred during deployment. [FEVM_RPC_Issue](https://github.com/TechieTeee/PayMed/assets/100870737/df992de2-5381-4494-8c8d-d889cb364682)

## Next Steps
The PayMed project is continually evolving. Some next steps for development and improvement include:

- Further testing and optimization of smart contracts.
- Integration with additional blockchain networks and ecosystems.
- Enhanced user interface features for a seamless experience.
- Continued collaboration with organizations and initiatives focused on global poverty relief.

Feel free to contribute to the project, provide feedback, or join the community in making healthcare payments more accessible and transparent.
