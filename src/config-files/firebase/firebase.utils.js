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

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date().toUTCString();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('user not creater', error)
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;