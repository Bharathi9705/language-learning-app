import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComB6doYSi0JVIWDbS5naazkdY2ePzeEY",
  authDomain: "language-learning-app-4a483.firebaseapp.com",
  projectId: "language-learning-app-4a483",
  storageBucket: "language-learning-app-4a483.firebasestorage.app",
  messagingSenderId: "867583730420",
  appId: "1:867583730420:web:48a07eae40e1fe33ab34a1",
  measurementId: "G-8D1N7HLJ9M"
};

const app         = initializeApp(firebaseConfig);
export const auth     = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db       = getFirestore(app);