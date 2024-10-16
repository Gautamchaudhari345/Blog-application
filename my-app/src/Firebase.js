// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVRhnSfQrfZUvfRmBMd9-l80x8T87oCtU",
  authDomain: "blog-application-c8fa2.firebaseapp.com",
  projectId: "blog-application-c8fa2",
  storageBucket: "blog-application-c8fa2.appspot.com",
  messagingSenderId: "477201538917",
  appId: "1:477201538917:web:1e886fa018984b2b7a0b8c",
  measurementId: "G-8J5MF6LL1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth=getAuth(app);

export const db=getFirestore(app);