import React from "react";
import styles from "./NavBar.module.css";
import chat from "../../assets/images/chat.png";

const NavBar = ({ signUserOut, isAuth }) => {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-main bg-nav">
        <div className="container d-flex justify-content-start">
          <img src={chat} alt="logo" width="50" height="50" className="m-2" />
          <span className="text-main fa-lg">
            <strong>MessengerApp</strong>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {isAuth ? (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <button
                  className="btnSignOut btn p-1 mx-5"
                  onClick={signUserOut}
                >
                  <strong className="mx-5 title">SignOut</strong>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
