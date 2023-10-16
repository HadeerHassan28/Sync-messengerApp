import React from "react";
import styles from "./NavBar.module.css";
import chat from "../../assets/images/chat.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      {" "}
      <nav className="navbar navbar-light bg-main">
        <div className="container d-flex justify-content-start ">
          <Link to="">
            <img
              src={chat}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top m-3"
            />
          </Link>
          <span className="text-main fa-lg">
            <strong>MessengerApp</strong>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
