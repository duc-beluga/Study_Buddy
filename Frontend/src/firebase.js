import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAShpZtb34dD9wyCCfcwLGf3qlil2pikek",
  authDomain: "chat-cb89d.firebaseapp.com",
  projectId: "chat-cb89d",
  storageBucket: "chat-cb89d.appspot.com",
  messagingSenderId: "2985174207",
  appId: "1:2985174207:web:5b6a44d8fb5aa940ddd20a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()