import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXHsFf4PBdYNEL2ZhLx7nyP7_ymVivk5Y",
    authDomain: "crwn-db-a42b0.firebaseapp.com",
    databaseURL: "https://crwn-db-a42b0.firebaseio.com",
    projectId: "crwn-db-a42b0",
    storageBucket: "crwn-db-a42b0.appspot.com",
    messagingSenderId: "200128508622",
    appId: "1:200128508622:web:47f2f6647ba386f8b4969f"
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { 'prompt': 'select_account'});
  export const signWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;