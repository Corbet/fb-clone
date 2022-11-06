import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVwp9Igz2o9XFnQCEuP0CSoIxDfLjVQMY",
  authDomain: "facebook-clone-92f4e.firebaseapp.com",
  projectId: "facebook-clone-92f4e",
  storageBucket: "facebook-clone-92f4e.appspot.com",
  messagingSenderId: "754049397565",
  appId: "1:754049397565:web:fc945ebf66500c3ed70b54",
  measurementId: "G-G25DL3V3FR"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export { auth, provider }
export default db;