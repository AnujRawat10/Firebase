// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyfvHHFmhs_dVNwz01b0srp-3qi71MJeY",
  authDomain: "login1-b0ff1.firebaseapp.com",
  projectId: "login1-b0ff1",
  storageBucket: "login1-b0ff1.appspot.com",
  messagingSenderId: "958819472756",
  appId: "1:958819472756:web:37f3b591b4d97083dc4821",
  measurementId: "G-GYFNCKD4KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
