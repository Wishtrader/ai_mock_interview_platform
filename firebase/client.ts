
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqjrhLrVrunCVl7L6Cb1S-M2EqzzNAkvw",
  authDomain: "prepwise-f9e8f.firebaseapp.com",
  projectId: "prepwise-f9e8f",
  storageBucket: "prepwise-f9e8f.firebasestorage.app",
  messagingSenderId: "778453965156",
  appId: "1:778453965156:web:860d7be7c1fee0f5228271",
  measurementId: "G-RQN86DQWT9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);