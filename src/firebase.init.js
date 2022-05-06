// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW_vTVt8mE7LREyJ0E71Po3QnPfL59v2c",
    authDomain: "assignment11-motozone.firebaseapp.com",
    projectId: "assignment11-motozone",
    storageBucket: "assignment11-motozone.appspot.com",
    messagingSenderId: "592306798078",
    appId: "1:592306798078:web:b2eb051dba07c9c67d54af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

