import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWATOp6OG934-yhQ3kwb8glB_N4eEEAHY",
  authDomain: "nwitter-72ec9.firebaseapp.com",
  projectId: "nwitter-72ec9",
  storageBucket: "nwitter-72ec9.appspot.com",
  messagingSenderId: "462466103667",
  appId: "1:462466103667:web:f50dcb2f862b9b0464ed06",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
