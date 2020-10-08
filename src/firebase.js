import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDi8bxiV3Gzh4NBxpqqBeS62C-5yP0igfI",
    authDomain: "instagram-clone-3519c.firebaseapp.com",
    databaseURL: "https://instagram-clone-3519c.firebaseio.com",
    projectId: "instagram-clone-3519c",
    storageBucket: "instagram-clone-3519c.appspot.com",
    messagingSenderId: "782975509119",
    appId: "1:782975509119:web:1d5d2f87dacdfac5a9d54a",
    measurementId: "G-SGJBY7CJZH"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };