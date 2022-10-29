
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhcSPp4GU08lWFRSfDp-Ty9g5ZAxKVRTA",
  authDomain: "chato-c56e9.firebaseapp.com",
  projectId: "chato-c56e9",
  storageBucket: "chato-c56e9.appspot.com",
  messagingSenderId: "936137288260",
  appId: "1:936137288260:web:4581def489c4e4eeebea11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();