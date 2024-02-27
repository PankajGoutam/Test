// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtF3jpFd9WX_uuZkvptRS3E6je1H2-utk",
  authDomain: "customer-d26ef.firebaseapp.com",
  projectId: "customer-d26ef",
  storageBucket: "customer-d26ef.appspot.com",
  messagingSenderId: "506707869589",
  appId: "1:506707869589:web:c678edc859512f9843009c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);