import React, { useState } from "react";
import styles from "./Notification.module.css";
import { getToken } from "../../firebase";
const Notification = (props) => {
  const [isTokenFound, setisTokenFound] = useState(false);
  console.log("token", isTokenFound);

  //To load once
  useEffect(() => {
    let data;
    async function tokenFuc() {
      data = await getToken(setisTokenFound);
      if (data) console.log(data);
      return data;
    }

    tokenFuc();
  }, [setisTokenFound]);
  return <></>;
};
Notification.propsType = {};
export default Notification;
