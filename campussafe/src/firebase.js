// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybDl49NqJ7e0PMaGAgVl8OUnV224erh8",
  authDomain: "campussafe-dd315.firebaseapp.com",
  projectId: "campussafe-dd315",
  storageBucket: "campussafe-dd315.appspot.com",
  messagingSenderId: "246294591392",
  appId: "1:246294591392:web:bf0ed3b020ba83989196c5",
  measurementId: "G-GB8ETH9DV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;