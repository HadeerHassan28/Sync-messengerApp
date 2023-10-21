// self.importScripts("https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js");
// self.importScripts(
//   "https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-compat.js"
// );

import { getMessaging, onBackgroundMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBCagfGW2FdggWsDw-nWtsm9i1KfOWCQAY",
  authDomain: "syncmessengerapp.firebaseapp.com",
  projectId: "syncmessengerapp",
  storageBucket: "syncmessengerapp.appspot.com",
  messagingSenderId: "169530853565",
  appId: "1:169530853565:web:e02f6d9e2e1e5b60920fd4",
  measurementId: "G-8NM47YGLTK",
};

const messaging = getMessaging(firebaseConfig);

export function backgroundMes() {
  onBackgroundMessage(messaging, (payload) => {
    console.log(" Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "public/chat.png",
    };

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
}
