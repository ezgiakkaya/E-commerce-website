// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTm1bdhhE79OAPt4eR-pbLT0R1BWklUBk",
  authDomain: "challenge-c219b.firebaseapp.com",
  projectId: "challenge-c219b",
  storageBucket: "challenge-c219b.appspot.com",
  messagingSenderId: "1086771566950",
  appId: "1:1086771566950:web:e811704908e28e3a7590a7",
  measurementId: "G-072GZQEZL7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
