// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgZfb5a8-L99niL5KtaL1NZmw-DCazqfU",
  authDomain: "rishav-portfolio-fc8e2.firebaseapp.com",
  projectId: "rishav-portfolio-fc8e2",
  storageBucket: "rishav-portfolio-fc8e2.appspot.com",
  messagingSenderId: "398821153563",
  appId: "1:398821153563:web:4214d18685035e46ca11be",
  measurementId: "G-T9RG3L602T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();