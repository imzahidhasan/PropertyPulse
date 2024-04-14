// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKieepvcXVrtBBcFgUWnrP4r_4r1ani2w",
  authDomain: "fir-email-auth-18750.firebaseapp.com",
  projectId: "fir-email-auth-18750",
  storageBucket: "fir-email-auth-18750.appspot.com",
  messagingSenderId: "428321689617",
  appId: "1:428321689617:web:ef65fbb515961f0674e1b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth