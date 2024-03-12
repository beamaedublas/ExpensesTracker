// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHpqLn5GW0m738rKyS4pI54leVjJRJV8",
  authDomain: "expenses-2f2ae.firebaseapp.com",
  projectId: "expenses-2f2ae",
  storageBucket: "expenses-2f2ae.appspot.com",
  messagingSenderId: "1019441867685",
  appId: "1:1019441867685:web:a7f8a3a089a552cedb564c",
  measurementId: "G-43ZF58GWF7"
};


initializeApp(firebaseConfig);

const db = getFirestore();
export default db