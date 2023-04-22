import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

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
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()