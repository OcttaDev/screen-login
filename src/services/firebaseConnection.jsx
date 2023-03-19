import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDQaIJM2ijHnCR7iiXU8LinAyYoX_Q2afE",
    authDomain: "screen-login-project.firebaseapp.com",
    projectId: "screen-login-project",
    storageBucket: "screen-login-project.appspot.com",
    messagingSenderId: "60113133030",
    appId: "1:60113133030:web:a5555e4004a5dee3e40a27",
    measurementId: "G-9H4Z912NTS"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };