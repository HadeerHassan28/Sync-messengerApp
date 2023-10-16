import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="contaier mt-5">
        <div className="col-md-6 d-flex  justify-content-start align-self-center">
          <h2 className="h2 title">
            <strong className="mx-5">Welcome To MessengerApp</strong>
          </h2>
        </div>

        <div className="col-md-6 d-flex justify-content-between ">
          <Link to="signup">
            <button className="btn btn-pirmery w-100 p-3 m-5">SignUp</button>
          </Link>
          <Link to="login">
            <button className="btn btn-pirmery w-100 p-3 m-5">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
