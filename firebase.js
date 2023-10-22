// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
const firebaseConfig = {
  apiKey: "AIzaSyBCagfGW2FdggWsDw-nWtsm9i1KfOWCQAY",
  authDomain: "syncmessengerapp.firebaseapp.com",
  databaseURL: "https://syncmessengerapp-default-rtdb.firebaseio.com",
  projectId: "syncmessengerapp",
  storageBucket: "syncmessengerapp.appspot.com",
  messagingSenderId: "169530853565",
  appId: "1:169530853565:web:00c612ca811efeaf920fd4",
  measurementId: "G-2XKNVE4YJT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

const publicKey =
  "BLQwAvcSnM_o7OslNmL16w6_9_KZb_RYQ481WUhAVYb0Nir5xBFjH6rmeXW-9RyBJhzjt8n01oZVdrEmwcqbOQk";

//! Token:
export function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, { vapidKey: publicKey }).then((currentToken) => {
        if (currentToken) {
          console.log("done", currentToken);
          //sendTokenToServer(currentToken);
        } else console.log("fail");
      });
    } else console.log("Failed");
  });
}
requestPermission();
// function sendTokenToServer(token) {
//   const serverKey =
//     "AAAAJ3jTiL0:APA91bH4zdE5DscUhpvzua7VRuT4GO_e72m9MwF9OQWlj3ehS-_kd3KlBTxQq1N4A-ADJgVZ--FNnVln6ZKeb8vL0oxOHk5Y3EUsPR14oN_223DtU1lulLanEAyoPvpZPB8XC4SDAbj3";
//   const data = {
//     message: {
//       token: token,
//       notification: {
//         title: "New Message",
//         body: "You have a new message!",
//       },
//     },
//   };
//   fetch(
//     "https://fcm.googleapis.com//v1/projects/syncmessengerapp/messages:send",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer 169530853565-ch3lii7g6juc5rcghl82d69b7an9jvhl.apps.googleusercontent.com`,
//       },
//       body: JSON.stringify(data),
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Token sent to server:", data);
//     })
//     .catch((error) => {
//       console.error("Error sending token to server:", error);
//     });
// }
// //! OnMessage:
export function NewMsgNoti() {
  onMessage(messaging, (payload) => {
    console.log("Message received.", payload);
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
