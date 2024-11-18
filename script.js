let userWallet = null;

// Function to connect Metamask
async function connectMetamask() {
    console.log("Attempting to detect Metamask...");
    const provider = await detectEthereumProvider();

    if (provider) {
        console.log("Metamask detected!");
        try {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            userWallet = accounts[0];
            console.log("Connected wallet:", userWallet);
            updateWalletInfo();
        } catch (err) {
            console.error("Error connecting to Metamask:", err);
            alert('Could not connect to Metamask. Please try again.');
        }
    } else {
        console.error("Metamask not detected.");
        alert('Metamask is not installed. Please install it and refresh the page.');
    }
}

// Function to log out and reset wallet info
function logoutMetamask() {
    console.log("Logging out...");
    userWallet = null;
    updateWalletInfo();
}

// Function to update wallet information on the UI
function updateWalletInfo() {
    const walletAddressElement = document.getElementById('wallet-address');
    const connectWalletBtn = document.getElementById('connect-wallet-btn');
    const logoutButton = document.getElementById('logout-button');

    if (userWallet) {
        walletAddressElement.textContent = `Connected: ${userWallet}`;
        connectWalletBtn.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    } else {
        walletAddressElement.textContent = 'Not connected';
        connectWalletBtn.style.display = 'inline-block';
        logoutButton.style.display = 'none';
    }
}

// Add event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connect-wallet-btn').addEventListener('click', connectMetamask);
    document.getElementById('logout-button').addEventListener('click', logoutMetamask);
});
