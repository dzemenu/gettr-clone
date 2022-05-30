// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig ={
    apiKey: "AIzaSyA-YYz0CHZ95IWDebKIFRBm3J5j_WKxscc",
    authDomain: "gettr-login.firebaseapp.com",
    projectId: "gettr-login",
    storageBucket: "gettr-login.appspot.com",
    messagingSenderId: "621069249060",
    appId: "1:621069249060:web:f717acf59e50a84196c6b1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const auth=getAuth()
export {app,provider,auth}
