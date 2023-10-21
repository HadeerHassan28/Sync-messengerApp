import React, { useState, useEffect } from "react";
import styles from "./ChatRoom.module.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../../firebase";

const ChatRoom = ({ room }) => {
  const [newMsg, setnewMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMsg = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscrib = onSnapshot(queryMsg, (snapshot) => {
      let msgs = [];
      snapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });

    // Subscribe to foreground FCM messages

    return () => {
      unsuscrib();
    }; //cleanup function to stop listening for changes when the component unmounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMsg === "") return;
    await addDoc(messagesRef, {
      text: newMsg,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });
    setnewMsg("");
  };
  //!to display time
  const formatTimestamp = (timestamp) => {
    const seconds = timestamp?.seconds || 0;
    const nanoseconds = timestamp?.nanoseconds || 0;

    const date = new Date(seconds * 1000 + nanoseconds / 1000000);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const formattedMessages = messages.map((message) => {
    const formattedCreatedAt = formatTimestamp(message.createdAt);
    return { ...message, createdAt: formattedCreatedAt };
  });

  return (
    <>
      <div className="container mt-3 ">
        <div className="d-flex  justify-content-center align-self-center mb-3">
          <h2 className="title">
            <strong>Welcome to {room.toUpperCase()}</strong>
          </h2>
        </div>
        <div>
          {formattedMessages.map((ele) => (
            <>
              <div
                className="contanier msgBorder p-2 mb-2 d-flex bg-main"
                key={ele.id}
              >
                <span className="user p-2 h5">{ele.user}: </span>
                <span className="msg p-2 align-items-end flex-column">
                  {" "}
                  {ele.text}
                </span>

                <span className="msg ml-auto p-2 me-3 time">
                  {" "}
                  {ele.createdAt}
                </span>
              </div>
            </>
          ))}
        </div>
        <form className="new-msg-form mt-3" onSubmit={handleSubmit}>
          <div className="d-flex  justify-content-start align-self-center ">
            <input
              className="inputMsg border px-3"
              placeholder="Type your message here..."
              onChange={(e) => setnewMsg(e.target.value)}
              value={newMsg}
            />
          </div>

          <button
            className="btn btn-pirmery align-self-end p-3 m-3 bg-btn"
            type="submit"
          >
            <strong>Send</strong>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatRoom;
