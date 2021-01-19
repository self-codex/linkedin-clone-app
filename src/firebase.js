import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA50ONaflvt7jdswgONHCKLPsMNsihCjlQ",
  authDomain: "selfcodex-linkedin-clone.firebaseapp.com",
  projectId: "selfcodex-linkedin-clone",
  storageBucket: "selfcodex-linkedin-clone.appspot.com",
  messagingSenderId: "573747522242",
  appId: "1:573747522242:web:70bd62bba3c4b05377295b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
