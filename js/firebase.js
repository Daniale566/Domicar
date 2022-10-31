// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfIp0cvTl5WrYU6j4Rws5VJ26pYcUaaDA",
    authDomain: "app-car-32974.firebaseapp.com",
    projectId: "app-car-32974",
    storageBucket: "app-car-32974.appspot.com",
    messagingSenderId: "871727954047",
    appId: "1:871727954047:web:39a5caa4c2f41c5454674a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
console.log('Llegué a Firebase')
console.log(app)