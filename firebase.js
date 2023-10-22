// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
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
export const messaging = getMessaging();

const publicKey =
  "BLtlo70jxVw5bqEM4nQZLRHMuWwhlNJ22BVt5zMQlI2Lynbw669pDJXmgquMJIuLL70kdhczu3fi6EWyPM_4GAE";

export function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, { vapidKey: publicKey }).then((currentToken) => {
        if (currentToken) console.log("done", currentToken);
        else console.log("fail");
      });
    } else console.log("Failed");
  });
}
requestPermission();
//! OnMessage:
export function NewMsgNoti() {
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    return payload;
  });
}

// //! OnBackgroundMsg:
// onBackgroundMessage(messaging, (payload) => {
//   console.log(" Received background message ", payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "public/chat.png",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
