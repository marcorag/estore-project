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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { 'prompt': 'select_account'});
  export const signWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;