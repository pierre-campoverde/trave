import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyC-SqM4QKlE6NyYvuLf7H73BntqeqzGYrw",
  authDomain: "trave-api.firebaseapp.com",
  projectId: "trave-api",
  storageBucket: "trave-api.appspot.com",
  messagingSenderId: "299065156359",
  appId: "1:299065156359:web:f17ce39a96e4412aa89ba2",
  measurementId: "G-HKVSCKKFYX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const db = firebase.firestore();
