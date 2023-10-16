import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import styles from "./ChatRoom.module.css";
import { db } from "../../firebase"; // Import db from firebase.js

const ChatRoom = ({ currentUser }) => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const msgRef = db.ref("msg");
    msgRef.on("value", (snapshot) => {
      const msgData = snapshot.val();
      if (msgData) {
        const msgArray = Object.values(msgData);
        setMsgs(msgArray);
      } else {
        setMsgs([]);
      }
    });

    return () => {
      msgRef.off("value");
    };
  }, []);

  const sendMsg = () => {
    const newMsg = {
      sender: currentUser.displayName,
      text: msg,
      timestamp: Date.now(),
    };
    db.ref("msg").push(newMsg);
    setMsg("");
  };

  return (
    <>
      <div>
        <div style={{ height: "300px", overflowY: "scroll" }}>
          {msgs.map((msg) => (
            <Message key={msg.timestamp} message={msg} />
          ))}
        </div>
        <div>
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMsg}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
