import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col-md-d">
            <Link to="signup">
              <button className="btn btn-pirmery">SignUp</button>
            </Link>
          </div>
          <div className="col-md-d">
            <Link to="login">
              <button className="btn btn-pirmery">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
