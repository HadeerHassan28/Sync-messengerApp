<<<<<<< HEAD
import firebase from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

=======
self.importScripts("https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-compat.js"
);
>>>>>>> e32cbb1
const firebaseConfig = {
  apiKey: "AIzaSyBCagfGW2FdggWsDw-nWtsm9i1KfOWCQAY",
  authDomain: "syncmessengerapp.firebaseapp.com",
  projectId: "syncmessengerapp",
  storageBucket: "syncmessengerapp.appspot.com",
  messagingSenderId: "169530853565",
  appId: "1:169530853565:web:e02f6d9e2e1e5b60920fd4",
  measurementId: "G-8NM47YGLTK",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
<<<<<<< HEAD
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOption = payload.notification.body;
  body: payload.notification.body;

  return self.registration.showNotification(
    notificationTitle,
    notificationOption
=======

messaging.onBackgroundMessage((payload) => {
  console.log(" Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/chat.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
>>>>>>> e32cbb1
  );
});
