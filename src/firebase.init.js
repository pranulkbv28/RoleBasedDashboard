// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4GNcT5FnKIKciEOvwQ1H9s1xlgWiCqTk",
  authDomain: "madrocket-assignment.firebaseapp.com",
  projectId: "madrocket-assignment",
  storageBucket: "madrocket-assignment.appspot.com",
  messagingSenderId: "28080685320",
  appId: "1:28080685320:web:34fca7c3b4e04a0d656cbd",
  measurementId: "G-4WK55PKLLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore};