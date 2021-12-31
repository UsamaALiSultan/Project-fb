import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw9b-7lWmEJjmS0XnGR-mAEiJMGJSW5k8",
  authDomain: "fb-clone-15a72.firebaseapp.com",
  projectId: "fb-clone-15a72",
  storageBucket: "fb-clone-15a72.appspot.com",
  messagingSenderId: "1028953680516",
  appId: "1:1028953680516:web:0d6039816e3fe27c1cf0d1",
  measurementId: "G-53SNV68ZCM"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 

  export { auth,  provider };
  export default db;