// Replace with your contract details
const ECOCOIN_CONTRACT_ADDRESS = "0xf4B4e4D89F1Fa635515eB19F22d511d31bd0E0c1"; // Replace with your contract address
const ECOCOIN_ABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "allowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSpender",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

let userWallet = null;
let ecoCoinContract = null;

// Function to connect Metamask and fetch balance
async function connectMetamask() {
    console.log("Attempting to detect Metamask...");
    const provider = await detectEthereumProvider();

    if (provider) {
        console.log("Metamask detected!");
        try {
            // Initialize Web3 instance
            const web3 = new Web3(provider);

            // Request wallet connection
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            userWallet = accounts[0];
            console.log("Connected wallet:", userWallet);

            // Initialize contract instance
            ecoCoinContract = new web3.eth.Contract(ECOCOIN_ABI, ECOCOIN_CONTRACT_ADDRESS);

            // Fetch EcoCoin balance
            const balance = await getEcoCoinBalance(userWallet);
            console.log("EcoCoin balance:", balance);

            // Update wallet information in the UI
            updateWalletInfo(balance);
        } catch (err) {
            console.error("Error connecting to Metamask:", err.message || err);
            if (err.code === 4001) {
                alert("Connection request was rejected by the user.");
            } else {
                alert("An error occurred. Please check your Metamask and try again.");
            }
        }
    } else {
        console.error("Metamask not detected.");
        alert('Metamask is not installed. Please install it and refresh the page.');
    }
}

// Function to fetch EcoCoin balance
async function getEcoCoinBalance(address) {
    if (!ecoCoinContract) {
        console.error("EcoCoin contract is not initialized.");
        return "0";
    }
    try {
        // Fetch balance from the contract
        const balance = await ecoCoinContract.methods.balanceOf(address).call();
        const decimals = await ecoCoinContract.methods.decimals().call();
        return balance / (10 ** decimals); // Adjust for token decimals
    } catch (err) {
        console.error("Error fetching EcoCoin balance:", err.message || err);
        return "0";
    }
}

// Function to update wallet information in the UI
function updateWalletInfo(balance = null) {
    const walletAddressElement = document.getElementById('wallet-address');
    const walletBalanceElement = document.getElementById('wallet-balance');
    const connectWalletBtn = document.getElementById('connect-wallet-btn');
    const logoutButton = document.getElementById('logout-button');

    if (userWallet) {
        walletAddressElement.textContent = `Connected: ${userWallet}`;
        walletBalanceElement.textContent = balance !== null ? `EcoCoin Balance: ${balance}` : "Fetching balance...";
        connectWalletBtn.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    } else {
        walletAddressElement.textContent = 'Not connected';
        walletBalanceElement.textContent = '';
        connectWalletBtn.style.display = 'inline-block';
        logoutButton.style.display = 'none';
    }
}

// Function to log out and reset wallet info
function logoutMetamask() {
    console.log("Logging out...");
    userWallet = null;
    updateWalletInfo();
}

// Add event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connect-wallet-btn').addEventListener('click', connectMetamask);
    document.getElementById('logout-button').addEventListener('click', logoutMetamask);
});

// Function to handle buying items (you'll add actual smart contract logic here)
function buyItem(item, price) {
    alert(`Buying ${item} for ${price} EcoTokens`);
    // Implement buy logic here using Web3.js or other methods
    // After purchase, update the marketplace
    updateMarketplace();
}

// Function to view more items
function viewMoreItems() {
    alert("Viewing more items...");
    // Implement logic to display more items dynamically
}

// Function to handle buying selected item from the marketplace actions
async function buySelectedItem() {
    const selectedItem = document.getElementById("item-select").value;
    const quantity = document.getElementById("quantity-input").value;
    alert(`Buying ${quantity} ${selectedItem}(s)`);
    // Implement actual blockchain logic for the buy transaction
    
    // Update the marketplace after purchase
    updateMarketplace();
}

// Function to handle selling selected item
async function sellSelectedItem() {
    const selectedItem = document.getElementById("item-select").value;
    const quantity = document.getElementById("quantity-input").value;
    alert(`Selling ${quantity} ${selectedItem}(s)`);
    // Implement actual blockchain logic for the sell transaction
    
    // Update the marketplace after sale
    updateMarketplace();
}

// Function to update the marketplace (e.g., after a transaction)
function updateMarketplace() {
    // For now, simply re-fetch wallet balance to show updated state
    updateWalletBalance();

    // You can add logic here to dynamically update the item list if needed
    // E.g., showing a list of items that are available or based on available balance
}


