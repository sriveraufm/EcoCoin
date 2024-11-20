 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAMr6arpAlAICpLH4W305uG18uigBY9Tnk",
   authDomain: "ecocoins.firebaseapp.com",
   projectId: "ecocoins",
   storageBucket: "ecocoins.firebasestorage.app",
   messagingSenderId: "706210214070",
   appId: "1:706210214070:web:31042ad8e8c3680f5cb617"
 };


   // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



 


 /**
  * Function to find a wallet by address
  * @param {string} address - Wallet address to find
  * @returns {string|false} - Returns document ID if found, or false if not found
  */
 async function findWalletByAddress(address) {
   try {
     const walletsRef = collection(db, "wallets");
     const q = query(walletsRef, where("address", "==", address));
     const querySnapshot = await getDocs(q);
 
     if (!querySnapshot.empty) {
       const doc = querySnapshot.docs[0];
       return doc.id; // Return the document ID
     } else {
       return false; // Wallet not found
     }
   } catch (e) {
     console.error("Error finding wallet: ", e);
     throw e;
   }
 }
 
 // Function to add a value to the wallets collection
 //usage

  // Example usage
//   const walletData = {
//     address: "Alice",
//     balance: 100,
//     createdAt: new Date()
//   };

 // addWalletIfNotExists(walletData);

 /**
  * Function to add a wallet only if the address is not found
  * @param {Object} walletData - Wallet data to add
  * @returns {string} - Returns the document ID of the added or existing wallet
  */
 export async function addWalletIfNotExists(walletData) {
   try {
     const existingWalletId = await findWalletByAddress(walletData.address);
 
     if (existingWalletId) {
        
       console.log("Wallet already exists with ID:", existingWalletId);
       return existingWalletId; // Return the existing wallet ID
     }
 
     // Add the wallet if it doesn't exist
     const docRef = await addDoc(collection(db, "wallets"), walletData);
     console.log("New wallet added with ID:", docRef.id);
     return docRef.id;
   } catch (e) {
     console.error("Error adding wallet: ", e);
     throw e;
   }
 }
 
  /**
  * Function to add a wallet only if the address is not found
  * @param {Object} walletData - Wallet data to add
  * @returns {string} - Returns the document ID of the added or existing wallet
  */
  export async function addItemForSale(itemForSaleData) {
    try {
    
      // add to firebase
      const docRef = await addDoc(collection(db, "itemsForSale"), itemForSaleData);
      console.log("New item for sale added to firebase with ID:", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding itemForSale: ", e);
      throw e;
    }
  }


  export async function fetchItemsForSale() {
    const itemsRef = collection(db, "itemsForSale");
    const q = query(itemsRef); // No filtering needed in this case
  
    const querySnapshot = await getDocs(q);
    const itemsForSale = [];
  
    querySnapshot.forEach(doc => {
      const data = doc.data();
      itemsForSale.push({
        name: data.itemType,
        price: data.itemPrice,
        quantity: data.itemQuantity
      });
    });
  
    return itemsForSale;
  }
