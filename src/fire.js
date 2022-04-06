import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhu4A1NYBAMw-GjHiDlpKh-igaz4VXAxA",
  authDomain: "bmw17-9d3bb.firebaseapp.com",
  projectId: "bmw17-9d3bb",
  storageBucket: "bmw17-9d3bb.appspot.com",
  messagingSenderId: "446878488011",
  appId: "1:446878488011:web:0e30eaf6246009a736924e",
  measurementId: "G-JT9FLNSJ89",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
