import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-E9VX8n8ytdBh-xJvU9T94tgayv91O24",
    authDomain: "library-catalog-5d1ee.firebaseapp.com",
    databaseURL: "https://library-catalog-5d1ee-default-rtdb.firebaseio.com",
    projectId: "library-catalog-5d1ee",
    storageBucket: "library-catalog-5d1ee.firebasestorage.app",
    messagingSenderId: "208558639650",
    appId: "1:208558639650:web:564ef91d341bbb23ef587b",
    measurementId: "G-BHYSZHJLTR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
