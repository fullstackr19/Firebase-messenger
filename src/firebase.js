import firebase from 'firebase/app';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwccg74UWYBX8DTsYoBvQamHk9W6-WXzU",
    authDomain: "facebook-messenger-clone-94e15.firebaseapp.com",
    projectId: "facebook-messenger-clone-94e15",
    storageBucket: "facebook-messenger-clone-94e15.appspot.com",
    messagingSenderId: "840966616499",
    appId: "1:840966616499:web:67a3e260847d825470c7c6",
    measurementId: "G-0STV1EX50D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;