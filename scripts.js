console.log("Script is running...");

const marketplaceItems = document.getElementById("credits-for-sale");
const sellCreditsButton = document.getElementById("sell-credits-btn");
const transactionMessage = document.getElementById("transaction-message");

let items = [
    { name: "Solar Panel", price: 100, quantity: 10 },
    { name: "Wind Turbine", price: 500, quantity: 5 },
    { name: "Hydro Generator", price: 300, quantity: 7 },
];

function renderMarketplaceItems() {
    console.log("Rendering items...");
    marketplaceItems.innerHTML = "";
    items.forEach((item, index) => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("card");
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price} EcoTokens</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="buyCredit(${index})">Buy</button>
        `;
        marketplaceItems.appendChild(itemCard);
    });
}

function buyCredit(index) {
    console.log(`Buying item at index ${index}`);
    if (items[index].quantity > 0) {
        items[index].quantity -= 1;
        showTransactionMessage(`You bought 1 ${items[index].name} for ${items[index].price} EcoTokens!`);
    } else {
        showTransactionMessage(`Sorry, ${items[index].name} is out of stock.`);
    }
    renderMarketplaceItems();
}

sellCreditsButton.addEventListener("click", () => {
    const itemName = document.getElementById("item-type").value;
    const itemPrice = document.getElementById("item-price").value;
    const itemQuantity = document.getElementById("item-quantity").value;

    if (itemName && itemPrice && itemQuantity > 0) {
        items.push({ name: itemName, price: parseInt(itemPrice), quantity: parseInt(itemQuantity) });
        showTransactionMessage(`You listed ${itemName} for sale at ${itemPrice} EcoTokens each.`);
        renderMarketplaceItems();
    } else {
        showTransactionMessage("Please fill in all fields with valid values.");
    }
});

function showTransactionMessage(message) {
    transactionMessage.textContent = message;
}

renderMarketplaceItems();
