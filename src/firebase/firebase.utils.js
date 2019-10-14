import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChmcW9ingWL9FeFRAxGOBc8c6_5I7DU7I",
    authDomain: "crwn-db-64094.firebaseapp.com",
    databaseURL: "https://crwn-db-64094.firebaseio.com",
    projectId: "crwn-db-64094",
    storageBucket: "crwn-db-64094.appspot.com",
    messagingSenderId: "639856917107",
    appId: "1:639856917107:web:c09ef2aa7d8400df970806",
    measurementId: "G-2M78XXLD5P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;