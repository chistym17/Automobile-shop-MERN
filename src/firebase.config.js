// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiHMOSBJag2qzBAqksWVVL1yhEnCb3S1U",
  authDomain: "brand-shop-project-99899.firebaseapp.com",
  projectId: "brand-shop-project-99899",
  storageBucket: "brand-shop-project-99899.appspot.com",
  messagingSenderId: "607711709070",
  appId: "1:607711709070:web:f9f4f2e421c2bddfbe06df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

