
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNOUYGTVzwUZiW0lyQZJZxtcVXyybYPLc",
    authDomain: "personalportfolio-f0580.firebaseapp.com",
    projectId: "personalportfolio-f0580",
    storageBucket: "personalportfolio-f0580.appspot.com",
    messagingSenderId: "726426998150",
    appId: "1:726426998150:web:71cc1249260b482c02c807",
    measurementId: "G-RFQTFNKX9J"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
