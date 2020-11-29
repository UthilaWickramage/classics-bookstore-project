// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDPZoGXZ6NlVKSglcI1hlv2T7pQUoJ_LMg",
   authDomain: "learning-app-9a449.firebaseapp.com",
   databaseURL: "https://learning-app-9a449.firebaseio.com",
   projectId: "learning-app-9a449",
   storageBucket: "learning-app-9a449.appspot.com",
   messagingSenderId: "512019040428",
   appId: "1:512019040428:web:077c2bf70161070a5bf709",
   measurementId: "G-6NFGCSHRFN"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase