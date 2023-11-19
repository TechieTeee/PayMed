// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin's Ownable contract for access control
import "@openzeppelin/contracts/access/Ownable.sol";

contract PayMedMainContract is Ownable {
    // Mapping to store the IPFS hash of files associated with a payment
    mapping(uint256 => string) private paymentToFile;

    // Mapping to store the payment status
    mapping(uint256 => bool) private paymentStatus;

    // Event emitted when a payment is made and file is shared
    event PaymentMade(uint256 indexed paymentId, address payer, uint256 amount, string ipfsHash);

    // Function to make a payment and share a file
    function makePaymentAndShareFile(uint256 paymentId, string memory ipfsHash) external payable {
        // Ensure payment has not been made before
        require(!paymentStatus[paymentId], "Payment already made");

        // Accept payment
        require(msg.value > 0, "Payment amount must be greater than 0");

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
}
