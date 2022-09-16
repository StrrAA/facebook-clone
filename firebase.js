import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRTsEaaFse2v_14obdy6hzwB-PT_Gp8cw",
  authDomain: "facebook-2clone.firebaseapp.com",
  projectId: "facebook-2clone",
  storageBucket: "facebook-2clone.appspot.com",
  messagingSenderId: "1047233746709",
  appId: "1:1047233746709:web:835b2157ab1167e4debb1c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
