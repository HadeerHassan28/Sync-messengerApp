import React from "react";
import styles from "./NavBar.module.css";
import chat from "../../assets/images/chat.png";

const NavBar = ({ signUserOut, isAuth }) => {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light navbar-light bg-main bg-nav">
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

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              {isAuth ? (
                <button
                  className="btnSignOut btn p-1 mx-5"
                  onClick={signUserOut}
                >
                  <strong className="mx-5">SignOut</strong>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
