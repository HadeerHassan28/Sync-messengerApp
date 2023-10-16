import React from "react";
import styles from "./Message.module.css";
const Message = ({ message }) => {
  return (
    <>
      <div>
        <strong>{message.sender} </strong>: {message.text}
      </div>
    </>
  );
};

export default Message;
