// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFkq8EU9kyB5ybfGl--gBJo9m4N2hZQOg",
    authDomain: "web-technology-client-site.firebaseapp.com",
    projectId: "web-technology-client-site",
    storageBucket: "web-technology-client-site.appspot.com",
    messagingSenderId: "631449259450",
    appId: "1:631449259450:web:5e4ce1f0fcc3f55bc62183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app;