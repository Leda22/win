import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjCRyqTSEMzA0W0T3RMUiXzTRifekqgIk",
    authDomain: "prog-e9a07.firebaseapp.com",
    projectId: "prog-e9a07",
    storageBucket: "prog-e9a07.appspot.com",
    messagingSenderId: "514538620599", 
    appId: "1:514538620599:web:5164b9950cbcb99b1c2f32"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export {auth, storage}
export default db;