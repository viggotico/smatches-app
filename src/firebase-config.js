// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvPVcWJKP3qrcQwumqg03rzVKc2si7Knc",
    authDomain: "smatches-c588e.firebaseapp.com",
    databaseURL: "https://smatches-c588e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smatches-c588e",
    storageBucket: "smatches-c588e.firebasestorage.app",
    messagingSenderId: "405285207016",
    appId: "1:405285207016:web:72ac54962254f0a31fc25d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);