import { userWallet } from './script.js';
import { addItemForSale, fetchItemsForSale } from "./datascript.js";

console.log('userWallet en scriptM.js', userWallet);

// Predefined items for sale
// const itemsForSale = [
//     { name: 'Solar Panel', price: 100, quantity: 5 },
//     { name: 'Wind Turbine', price: 500, quantity: 2 },
//     { name: 'Hydro Generator', price: 300, quantity: 3 },
// ];

// Use itemsForSale here

//ahora usando firebase
async function renderItemsForSale2() {
    const itemsForSale = await fetchItemsForSale();
    const marketplaceContainer = document.getElementById('marketplace-items');
    marketplaceContainer.innerHTML = ''; // Clear current items

    if (itemsForSale.length === 0) {
        marketplaceContainer.innerHTML = '<p>No items currently for sale.</p>';
        return;
    }

    itemsForSale.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ${item.price} EcoCoins</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="buyItem(${index})" ${item.quantity === 0 ? 'disabled' : ''}>
                ${item.quantity === 0 ? 'Out of Stock' : 'Buy'}
            </button>
        `;
        marketplaceContainer.appendChild(card);
    });
}

// Function to render items for sale
function renderItemsForSale() {
    const marketplaceContainer = document.getElementById('marketplace-items');
    marketplaceContainer.innerHTML = ''; // Clear current items

    if (itemsForSale.length === 0) {
        marketplaceContainer.innerHTML = '<p>No items currently for sale.</p>';
        return;
    }

    itemsForSale.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ${item.price} EcoTokens</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="buyItem(${index})" ${item.quantity === 0 ? 'disabled' : ''}>
                ${item.quantity === 0 ? 'Out of Stock' : 'Buy'}
            </button>
        `;
        marketplaceContainer.appendChild(card);
    });
}

// Function to handle buying an item
function buyItem(index) {
    if (itemsForSale[index].quantity > 0) {
        itemsForSale[index].quantity--;
        alert(`You bought 1 ${itemsForSale[index].name}`);
        renderItemsForSale();
    } else {
        alert(`${itemsForSale[index].name} is out of stock!`);
    }
}

// Event listener for selling credits
document.getElementById('sell-credits-btn').addEventListener('click', () => {
    if (!userWallet) {
        alert('Not Logged In, item not added...');
        renderItemsForSale2();
        //avisa y refresca los items de firebase
    }
    else {
        const name = document.getElementById('item-type').value.trim();
        const price = parseInt(document.getElementById('item-price').value, 10);
        const quantity = parseInt(document.getElementById('item-quantity').value, 10);

        if (name && price > 0 && quantity > 0) {
            // itemsForSale.push({ name, price, quantity });
            alert(`${name} listed successfully!`);


            const itemForSaleData = {
                address: userWallet,
                itemType: name,
                itemPrice: price,
                itemQuantity: quantity,
                createdAt: new Date()
            };

           //firebase
            addItemForSale(itemForSaleData);


            renderItemsForSale2(); // Re-render the marketplace to include the new item
        } else {
            alert('Please enter valid item details.');
        }

        // Clear input fields after listing
        document.getElementById('item-type').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-quantity').value = 1;
    }
} // else
);

// Initial render of marketplace items
renderItemsForSale2();
