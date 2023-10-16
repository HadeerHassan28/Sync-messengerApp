import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

function ReadData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = firebase.database().ref("users");

    usersRef.on("value", (snapshot) => {
      const usersData = snapshot.val();
      const usersList = [];

      for (const key in usersData) {
        usersList.push({ id: key, ...usersData[key] });
      }

      setUsers(usersList);
    });

    return () => {
      usersRef.off();
    };
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ReadData;
