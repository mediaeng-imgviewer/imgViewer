import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/storage"; // If you need it

const config = {
  apiKey: "AIzaSyAL7DtCfP-zC4tClWZYWMo1UAishFECT_I",
  authDomain: "channelconnection-82cb9.firebaseapp.com",
  projectId: "channelconnection-82cb9",
  storageBucket: "channelconnection-82cb9.appspot.com",
  messagingSenderId: "613594823204",
  appId: "1:613594823204:web:f75263f95a8d5c267e36b1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
export const storage = firebase.storage();
export const fb = firebase;
export const FirebaseFieldValue = firebase.firestore.FieldValue;
export const FirebaseTimestamp = firebase.firestore.Timestamp;