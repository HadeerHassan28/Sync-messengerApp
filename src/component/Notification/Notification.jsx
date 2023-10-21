// import React, { useState, useEffect } from "react";
// import styles from "./Notification.module.css";
// import { onMessageListener } from "../../../firebase";

// const Notifications = () => {
//   const [show, setShow] = useState(false);
//   const [notification, setNotification] = useState({ title: "", body: "" });

//   const handleMessages = async () => {
//     try {
//       const payload = await onMessageListener();
//       console.log("New Message Received:", payload);

//       if (payload) {
//         setShow(true);
//         setNotification({
//           title: payload.notification.title,
//           body: payload.notification.body,
//         });
//       }
//     } catch (error) {
//       console.error("Error handling message:", error);
//     }
//   };

//   return (
//     <>
//       {" "}
//       <div>
//         {show && <div>{`${notification.title}: ${notification.body}`}</div>}
//       </div>
//     </>
//   );
// };

// export default Notifications;
