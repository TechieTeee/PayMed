// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin's Ownable contract for access control
import "@openzeppelin/contracts/access/Ownable.sol";

// Import the required interface for the USDC subgraph
import "./USDCSubgraphInterface.sol"; // Update with the actual path to your interface

// Import zkSync's contracts
import "./zksync/ZkSync.sol"; // Update with the actual path to zkSync

// Import Arx oracle interface
import "./ArxOracleInterface.sol"; // Update with the actual path to Arx oracle interface

contract PayMedMainContract is Ownable {
    // Mapping to store the IPFS hash of files associated with a payment
    mapping(uint256 => string) private paymentToFile;

    // Mapping to store the payment status
    mapping(uint256 => bool) private paymentStatus;

    // Event emitted when a payment is made and file is shared
    event PaymentMade(uint256 indexed paymentId, address payer, uint256 amount, string ipfsHash);

    // Event emitted when funds are deposited into the community wallet
    event FundsDeposited(address indexed depositor, uint256 amount);

    // Event emitted when funds are withdrawn for cash assistance
    event CashAssistanceWithdrawn(address indexed recipient, uint256 amount);

    // Event emitted when funds are deposited into zkSync
    event FundsDepositedToZkSync(address indexed depositor, uint256 amount);

    // Event emitted when funds are withdrawn from zkSync
    event FundsWithdrawnFromZkSync(address indexed recipient, uint256 amount);

    // Event emitted when the exchange rate is updated by the Arx oracle
    event ExchangeRateUpdated(string currency, uint256 rate);

    // Address of the USDC subgraph contract
    address private usdcSubgraph;

    // Address of the community wallet
    address private communityWallet;

    // Address of the zkSync contract
    address private zkSyncContract;

    // Address of the Arx oracle contract
    address private arxOracle;

    // Function to set the address of the USDC subgraph (onlyOwner)
    function setUSDCSubgraph(address _usdcSubgraph) external onlyOwner {
        usdcSubgraph = _usdcSubgraph;
    }

    // Function to set the address of the community wallet (onlyOwner)
    function setCommunityWallet(address _communityWallet) external onlyOwner {
        communityWallet = _communityWallet;
    }

    // Function to set the address of the zkSync contract (onlyOwner)
    function setZkSyncContract(address _zkSyncContract) external onlyOwner {
        zkSyncContract = _zkSyncContract;
    }

    // Function to set the address of the Arx oracle contract (onlyOwner)
    function setArxOracle(address _arxOracle) external onlyOwner {
        arxOracle = _arxOracle;
    }

    // Function to deposit funds into zkSync
    function depositFundsToZkSync(uint256 amount) external payable {
        require(zkSyncContract != address(0), "zkSync contract not set");

        // Call the deposit function in zkSync contract
        // You need to implement this function in your zkSync interface
        // For example: ZkSync(zkSyncContract).deposit{value: amount}();
        // Update the function based on the actual zkSync interface
        ZkSync(zkSyncContract).deposit{value: amount}();

        emit FundsDepositedToZkSync(msg.sender, amount);
    }

    // Function to withdraw funds from zkSync
    function withdrawFundsFromZkSync(uint256 amount) external {
        require(zkSyncContract != address(0), "zkSync contract not set");

        // Call the withdraw function in zkSync contract
        // You need to implement this function in your zkSync interface
        // For example: ZkSync(zkSyncContract).withdraw(amount);
        // Update the function based on the actual zkSync interface
        ZkSync(zkSyncContract).withdraw(amount);

        emit FundsWithdrawnFromZkSync(msg.sender, amount);
    }

    // Function to deposit funds into the community wallet (onlyOwner)
    function depositFundsIntoCommunityWallet() external payable onlyOwner {
        emit FundsDeposited(msg.sender, msg.value);
    }

    // Function to withdraw funds for cash assistance from the community wallet (onlyOwner)
    function withdrawFundsForCashAssistance(address recipient, uint256 amount) external onlyOwner {
        require(communityWallet != address(0), "Community wallet not set");
        require(address(this).balance >= amount, "Insufficient contract balance");

        // Transfer funds to the recipient
        payable(recipient).transfer(amount);

        emit CashAssistanceWithdrawn(recipient, amount);
    }

    // Function to make a payment and share a file
    function makePaymentAndShareFile(uint256 paymentId, string memory ipfsHash) external payable {
        // Ensure payment has not been made before
        require(!paymentStatus[paymentId], "Payment already made");

        // Accept payment
        require(msg.value > 0, "Payment amount must be greater than 0");

        // Check USDC balance using the subgraph
        require(checkUSDCBalance(msg.sender, msg.value), "Insufficient USDC balance");

        // Update payment status to true
        paymentStatus[paymentId] = true;

        // Store IPFS hash of the shared file
        paymentToFile[paymentId] = ipfsHash;

        // Emit event
        emit PaymentMade(paymentId, msg.sender, msg.value, ipfsHash);
    }

    // Function to retrieve the IPFS hash associated with a payment
    function getFileForPayment(uint256 paymentId) external view returns (string memory) {
        return paymentToFile[paymentId];
    }

    // Function to check if a payment has been made
    function isPaymentMade(uint256 paymentId) external view returns (bool) {
        return paymentStatus[paymentId];
    }

    // Function to withdraw funds from the contract (onlyOwner)
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Function to check the USDC balance using the subgraph
    function checkUSDCBalance(address account, uint256 amount) internal view returns (bool) {
        // Use the subgraph to query USDC balance for the given account
        // Implement this function based on your subgraph interface
        // For example: return USDCSubgraphInterface(usdcSubgraph).getBalance(account) >= amount;
        // Update the function based on the actual subgraph interface and query structure
    }

    // Function to get the latest exchange rate from the Arx oracle
    function getLatestExchangeRate(string memory currency) external view returns (uint256) {
        require(arxOracle != address(0), "Arx oracle contract not set");

        // Call the oracle contract to get the latest exchange rate
        // You need to implement this function in your Arx oracle interface
        // For example: return ArxOracleInterface(arxOracle).getLatestExchangeRate(currency);
        // Update the function based on the actual Arx oracle interface
    }
}
