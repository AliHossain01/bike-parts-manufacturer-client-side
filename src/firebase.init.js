// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlHXkpufGiPP01EyckRCHiTecOyMRvlz0",
    authDomain: "doctors-portal-2ca59.firebaseapp.com",
    projectId: "doctors-portal-2ca59",
    storageBucket: "doctors-portal-2ca59.appspot.com",
    messagingSenderId: "196192790222",
    appId: "1:196192790222:web:7399d94f7b5ae7f3c6929f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;