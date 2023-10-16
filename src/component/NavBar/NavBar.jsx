import React from "react";
import styles from "./NavBar.module.css";
import chat from "../../assets/images/chat.png";
const NavBar = () => {
  return (
    <>
      {" "}
      <nav className="navbar navbar-light bg-main">
        <div className="container d-flex justify-content-start ">
          <img
            src={chat}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top m-3"
          />
          <span className="text-main fa-lg">
            <strong>MessengerApp</strong>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
