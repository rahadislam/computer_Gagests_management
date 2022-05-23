// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx_bha6bUjxA8JgheQZDaOHMgmI7YFG44",
  authDomain: "computer-manufacturers.firebaseapp.com",
  projectId: "computer-manufacturers",
  storageBucket: "computer-manufacturers.appspot.com",
  messagingSenderId: "298498582909",
  appId: "1:298498582909:web:43eb39f15dc2cff5ba8414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;