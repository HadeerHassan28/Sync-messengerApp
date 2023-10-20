import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";
import { onMessageListener } from "../../firebase";
const Notifications = () => {
  useEffect(() => {
    const handleNewMessage = async () => {
      try {
        const payload = await onMessageListener();
        console.log("New Message Received:", payload);

        // Check if payload contains necessary data
        if (
          payload &&
          payload.notification &&
          payload.notification.title &&
          payload.notification.body
        ) {
          // Use browser's Notification API to show notifications
          if (Notification.permission === "granted") {
            new Notification(payload.notification.title, {
              body: payload.notification.body,
            });
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                new Notification(payload.notification.title, {
                  body: payload.notification.body,
                });
              }
            });
          }
        }
      } catch (error) {
        console.log("Error handling message:", error);
      }
    };

    handleNewMessage();
  }, []);

  return <></>;
};

Notification.propsType = {};
export default Notifications;
