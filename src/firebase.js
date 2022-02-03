import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs, doc, getDoc  } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAWjTC14orjZPK330szn07HMNKOUfg7Thk",
  authDomain: "disney-plus-clone-46a91.firebaseapp.com",
  projectId: "disney-plus-clone-46a91",
  storageBucket: "disney-plus-clone-46a91.appspot.com",
  messagingSenderId: "1060011283345",
  appId: "1:1060011283345:web:1ff94f4760799ff39a8030",
  measurementId: "G-RBWKRJRTWK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth =  getAuth();
const provider = new GoogleAuthProvider();

// const storage =  storage();

export { auth, provider, signInWithPopup, GoogleAuthProvider, doc, getDoc, getDocs, collection };

export default db;
