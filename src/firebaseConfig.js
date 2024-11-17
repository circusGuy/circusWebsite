// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTChVHJmzXadHVEb2jdXeRAiXNeLAuxI4",
  authDomain: "eventbritecircus.firebaseapp.com",
  databaseURL: "https://eventbritecircus-default-rtdb.firebaseio.com",
  projectId: "eventbritecircus",
  storageBucket: "eventbritecircus.firebasestorage.app",
  messagingSenderId: "696567894305",
  appId: "1:696567894305:web:3910aaa7039948d1152e60",
  measurementId: "G-S8RHVQ57KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;