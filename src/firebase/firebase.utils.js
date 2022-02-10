import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDNzG5gz1HdfK3Z61LSWQoD6ZSqKxLCTUM",
    authDomain: "k-store-c91b4.firebaseapp.com",
    projectId: "k-store-c91b4",
    storageBucket: "k-store-c91b4.appspot.com",
    messagingSenderId: "323953290756",
    appId: "1:323953290756:web:e778ae389fa126ca9b0f51",
    measurementId: "G-CYSFJMFHZY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } )
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;