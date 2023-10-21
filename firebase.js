// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getMessaging,
  onMessage,
  getToken,
  // onBackgroundMessage,
} from "firebase/messaging";

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
export const messaging = getMessaging(app);

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
// onMessage(messaging, (payload) => {
//   console.log(`Received background message ${JSON.stringify(payload)}`);
// });
// new Promise((resolve) => {
//   const unsubscribe = onMessage(messaging, (payload) => {
//     resolve(payload);
//   });
//   return () => unsubscribe;
// });
// };
// export const onMessageListener = () => {
//   new Promise((resolve) => {
//     const unsubscribe = onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//     return () => unsubscribe;
//   });
// };

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
