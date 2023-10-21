import React from "react";
import styles from "./Home.module.css";

import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Home = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      let result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="contaier mt-5">
        <div className="col-md-6 d-flex  justify-content-start align-self-center">
          <h2 className="h2 title">
            <strong className="mx-5">Welcome To MessengerApp</strong>
          </h2>
        </div>

        <div className="col-md-6 d-flex justify-content-between ">
          <button
            className="btn btn-pirmery w-100 p-3 m-5"
            onClick={signInWithGoogle}
          >
            SignIn With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
