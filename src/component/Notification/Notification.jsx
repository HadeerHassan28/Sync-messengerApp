import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";
import { getTokenId } from "../../../firebase";

const Notifications = () => {
  let data;
  const [isTokenFound, setisTokenFound] = useState(false);

  async function tokenFuc() {
    data = await getTokenId(setisTokenFound);
    console.log(data);
    if (data) setisTokenFound(true);
    return data;
  }

  useEffect(() => {
    tokenFuc(setisTokenFound);
  }, [setisTokenFound]);

  return <></>;
};

export default Notifications;
