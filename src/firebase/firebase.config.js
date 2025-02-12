// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzGS8yZr16ynkkhfcRnfsQTHdSMrpCK0E",
  authDomain: "newswave-84009.firebaseapp.com",
  projectId: "newswave-84009",
  storageBucket: "newswave-84009.firebasestorage.app",
  messagingSenderId: "750189337810",
  appId: "1:750189337810:web:bbb7993b96edccab6ba10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;