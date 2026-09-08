import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from
"https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBcYtsTZmv_R2Zo0QqsTDjt9iRgF38qeoU",
    authDomain: "python-7ab93.firebaseapp.com",
    databaseURL: "https://python-7ab93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "python-7ab93",
    storageBucket: "python-7ab93.firebasestorage.app",
    messagingSenderId: "258064448774",
    appId: "1:258064448774:web:032eafabbfd69e6206f287",
    measurementId: "G-K6HD0K00CK"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect Firestore
const db = getFirestore(app);


// Button
const button = document.getElementById("saveButton");

button.addEventListener("click", async () => {

    try {

        await addDoc(collection(db, "messages"), {
            text: "Hello from GitHub!",
            createdAt: new Date()
        });

        alert("Data saved to Firebase!");

    } catch (error) {

        console.error(error);
        alert("Error: " + error.message);

    }

});
  
