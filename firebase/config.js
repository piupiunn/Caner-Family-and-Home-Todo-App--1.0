import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0xkolbBQ8Bxm1VMYvlIF_2H7BIb_Zc9Y",
  authDomain: "caner-family-home-todo.firebaseapp.com",
  projectId: "caner-family-home-todo",
  storageBucket: "caner-family-home-todo.appspot.com",
  messagingSenderId: "528801470968",
  appId: "1:528801470968:web:a5b85bcc811183b458de0d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
