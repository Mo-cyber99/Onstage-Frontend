import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRII3wgfTUt139S8sSENICeyYP4RY_bh0",
    authDomain: "onstage-63bf8.firebaseapp.com",
    projectId: "onstage-63bf8",
    storageBucket: "onstage-63bf8.appspot.com",
    messagingSenderId: "414830106194",
    appId: "1:414830106194:web:d6626ba355bd1d40cc318b",
    measurementId: "G-LJFR74Z79W"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth, db };