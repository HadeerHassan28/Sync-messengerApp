import React, { useState } from "react";
import styles from "./LogIn.module.css";
import { auth, signInWithEmailAndPassword } from "../../firebase.js";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigete = useNavigate();
  const [setError, setsetError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is Required!"),
    }),
    onSubmit: async (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          setsetError(null);
          navigete("/chatroom");
        })
        .catch((error) => setsetError(error));
    },
  });

  return (
    <>
      <div className="contanier mt-2">
        <div className="row justify-content-center align-items-start bg-weather p-2">
          <div className="col-md-6">
            <h2 className="h2 text-danger">LogIn</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
              {/* email */}
              <div>
                <label htmlFor="email" className="form-label mt-4">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control mb-3"
                ></input>
                {formik.touched.email && formik.errors.email && (
                  <div className="alert alert-danger">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              {/* password */}
              <div>
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control mb-3"
                ></input>
                {formik.touched.password && formik.errors.password && (
                  <div className="alert alert-danger">
                    {formik.errors.password}
                  </div>
                )}
                {setError && (
                  <div className="alert alert-danger">{setError}</div>
                )}
                <button
                  className="btn btn-pirmery w-100 p-2"
                  type="submit"
                  onSubmit={formik.handleSubmit}
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
