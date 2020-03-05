import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHxkUN6z4--311zSet68aEQUTkJQStBpQ",
    authDomain: "crown-clothing-main-db.firebaseapp.com",
    databaseURL: "https://crown-clothing-main-db.firebaseio.com",
    projectId: "crown-clothing-main-db",
    storageBucket: "crown-clothing-main-db.appspot.com",
    messagingSenderId: "952827810946",
    appId: "1:952827810946:web:378b874f0788565ebdd09b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;