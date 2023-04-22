import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1rx1jLXo54cSE8ONXCzyecvKyIROIpWY",
  authDomain: "proyectofinal-4dd86.firebaseapp.com",
  projectId: "proyectofinal-4dd86",
  storageBucket: "proyectofinal-4dd86.appspot.com",
  messagingSenderId: "1051920043616",
  appId: "1:1051920043616:web:298ddc8499ed3e502b7d05"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})