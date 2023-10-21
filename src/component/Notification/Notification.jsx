import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";
import { getTokenID } from "../../../firebase";

const Notifications = () => {
  let data;
  const [isTokenFound, setisTokenFound] = useState(false);

  async function tokenFuc() {
    data = await getTokenID(setisTokenFound);
    console.log(data);
    if (data) setisTokenFound(true);
    return data;
  }

  useEffect(() => {
    tokenFuc(setisTokenFound);
  }, []);

  return <></>;
};

export default Notifications;
