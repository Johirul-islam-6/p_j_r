// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA-IhtfxnJ8WnYweWR4ocXs1wvzGtpIlv8",
  authDomain: "johir-portfolio.firebaseapp.com",
  projectId: "johir-portfolio",
  storageBucket: "johir-portfolio.appspot.com",
  messagingSenderId: "604421848038",
  appId: "1:604421848038:web:ef472007257f22f38e7427"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;