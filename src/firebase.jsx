// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGVCMdH-LXZdbIgX4Gnz1AZdZDvE3H-Xc",
  authDomain: "personal-finance-tracker-ad002.firebaseapp.com",
  projectId: "personal-finance-tracker-ad002",
  storageBucket: "personal-finance-tracker-ad002.appspot.com",
  messagingSenderId: "1077805016171",
  appId: "1:1077805016171:web:07dd515b6916238298bd2e",
  measurementId: "G-SWPW2DDZNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db,auth,provider,doc,setDoc}