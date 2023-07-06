import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5hUyetFI48VPkaEb4A5vjqdzTETHXfTo",
  authDomain: "blog-neo.firebaseapp.com",
  databaseURL: "https://blog-neo.firebaseio.com",
  projectId: "blog-neo",
  storageBucket: "blog-neo.appspot.com",
  messagingSenderId: "163045984594",
  appId: "1:163045984594:web:39a36f5e60b8e3a5fb928b",
}

// Initialize Firerbase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
