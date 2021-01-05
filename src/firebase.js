import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7qHtQS90GemoOFA2SaEznZXwp17eRcgk",
    authDomain: "discordian-clone.firebaseapp.com",
    projectId: "discordian-clone",
    storageBucket: "discordian-clone.appspot.com",
    messagingSenderId: "697461584159",
    appId: "1:697461584159:web:9f077821b681af02f8c02a",
    measurementId: "G-T8RZFXDDL2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;