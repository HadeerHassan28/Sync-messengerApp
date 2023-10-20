// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, onMessage } from "firebase/messaging";
import "firebase/messaging";
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
const messaging = getMessaging(app);

const publicKey =
  "BLtlo70jxVw5bqEM4nQZLRHMuWwhlNJ22BVt5zMQlI2Lynbw669pDJXmgquMJIuLL70kdhczu3fi6EWyPM_4GAE";

export const getToken = async (setTokenFound) => {
  let cureentToken = "";
  try {
    cureentToken = await messaging.getToken({ vapidKey: publicKey });
    if (cureentToken) setTokenFound(true);
    else setTokenFound(false);
  } catch (error) {
    console.log(error);
  }
  return cureentToken;
};

export const onMessageListener = () => {
  new Promise((resolve) => {
    const unsubscribe = onMessage(messaging, (payload) => {
      resolve(payload);
    });
    return () => unsubscribe;
    // messaging().onMessageHa(async (payload) => {
    // resolve(payload);
    // });
  });
};
