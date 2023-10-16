import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { auth, createUserWithEmailAndPassword } from "../../firebase.js";

import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = () => {
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
      createUserWithEmailAndPassword(auth, values.email, values.password).then(
        () => setError(null).catch((error) => setError(error))
      );
    },
  });

  return (
    <>
      <div className="contanier mt-2">
        <div className="row justify-content-center align-items-start bg-weather p-2">
          <div className="col-md-6">
            <h2 className="h2 text-danger">SignUp</h2>
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
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
