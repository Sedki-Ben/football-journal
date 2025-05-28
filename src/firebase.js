// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrkVY3KBUwLqln7J6NLBdwBcAE-U2vSww",
    authDomain: "pure-tactical-cartel.firebaseapp.com",
    projectId: "pure-tactical-cartel",
    storageBucket: "pure-tactical-cartel.firebasestorage.app",
    messagingSenderId: "111019607760",
    appId: "1:111019607760:web:7b0bfc44307c2121c200d5",
    measurementId: "G-6JW26Z1NBK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };