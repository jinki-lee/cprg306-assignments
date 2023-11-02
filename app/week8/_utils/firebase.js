// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALFd92FLyui993f17usIrxJRJVlA1vf3Q",
    authDomain: "cprg306-assignments-345fe.firebaseapp.com",
    projectId: "cprg306-assignments-345fe",
    storageBucket: "cprg306-assignments-345fe.appspot.com",
    messagingSenderId: "462248510137",
    appId: "1:462248510137:web:8714cfbe20cd1b61abd168",
    measurementId: "G-P6GE7HJJZL"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);