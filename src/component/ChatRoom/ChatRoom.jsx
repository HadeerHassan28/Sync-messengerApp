import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import styles from "./ChatRoom.module.css";
import { db } from "../../firebase"; // Import db from firebase.js

const ChatRoom = ({ currentUser }) => {
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    const messageRef = db.ref("message");
    messageRef.on("value", (snapshot) => {
      const messageData = snapshot.val();
      if (messageData) {
        const messageArray = Object.values(messageData);
        setmessages(messageArray);
      } else {
        setmessages([]);
      }
    });

    return () => {
      messageRef.off("value");
    };
  }, []);

  const sendMsg = () => {
    const newMsg = {
      sender: currentUser,
      text: message,
      timestamp: Date.now(),
    };
    db.ref("message").push(newMsg);
    setmessage("");
  };

  return (
    <>
      <div>
        <div style={{ height: "300px", overflowY: "scroll" }}>
          {messages.map((msg) => (
            <Message key={msg.timestamp} message={msg} />
          ))}
        </div>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMsg}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
