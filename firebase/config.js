import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0xkolbBQ8Bxm1VMYvlIF_2H7BIb_Zc9Y",
  authDomain: "caner-family-home-todo.firebaseapp.com",
  projectId: "caner-family-home-todo",
  storageBucket: "caner-family-home-todo.appspot.com",
  messagingSenderId: "528801470968",
  appId: "1:528801470968:web:a5b85bcc811183b458de0d",
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//init firebase auth
const auth = getAuth();

//init firebase storage
const storage = getStorage(app);

export { db, auth, storage };
