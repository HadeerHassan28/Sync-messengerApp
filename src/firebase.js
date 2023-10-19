// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/messaging";
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCagfGW2FdggWsDw-nWtsm9i1KfOWCQAY",
  authDomain: "syncmessengerapp.firebaseapp.com",
  projectId: "syncmessengerapp",
  storageBucket: "syncmessengerapp.appspot.com",
  messagingSenderId: "169530853565",
  appId: "1:169530853565:web:e02f6d9e2e1e5b60920fd4",
  measurementId: "G-8NM47YGLTK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = firebase.messaging;
const publicKey = `BPCMTBsfo6DGqjbpDLG3ta_KHfVNrPN_rc3bIJj -
  cqPhianu -
  CLpWbLaV_jtJElqXiQfPXUbhhRJuY2Nfuu3RuY`;
export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapiKey: publicKey });
    if (currentToken) setTokenFound(true);
    else setTokenFound(false);
  } catch (error) {
    console.log(error);
  }
  return currentToken;
};

export const onMessagesLisener = () => {
  new Promise((reslove) => {
    messaging.OnMessage((payload) => {
      reslove(payload);
    });
  });
};
