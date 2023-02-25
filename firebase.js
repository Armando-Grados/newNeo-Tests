import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4S0UvUtth9JlaFH9trN6LIuuBLtb3Xyg",
  authDomain: "neo-cms-next.firebaseapp.com",
  projectId: "neo-cms-next",
  storageBucket: "neo-cms-next.appspot.com",
  messagingSenderId: "458609773994",
  appId: "1:458609773994:web:6829864a6a5c088741efd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
