import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDqpqgSrHyKyXZf1kek7WB2n55bFPNXYv8",
    authDomain: "project-fb-16cff.firebaseapp.com",
    projectId: "project-fb-16cff",
    storageBucket: "project-fb-16cff.appspot.com",
    messagingSenderId: "6070190401",
    appId: "1:6070190401:web:3820fc273f52d3e37a21c0",
    measurementId: "G-HXR16C8B29"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export {auth, provider};
  export default db;