import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../../../firebase.init";
import FormField from "../loginSignupComponents/LoginFormField";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState(" ");
  let [password, setPassword] = useState(" ");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password, user);
    console.log("new submit")

    signInWithEmailAndPassword(email, password)
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


    useEffect(() => {
      if (user) {
        navigate('/dashboard')
        console.log(user);
        console.log("Welcome");
      }
    }, [user, navigate]);
  
    useEffect(() => {
      if (error) {
        console.log(error.message);
        alert("Please enter a valid email or password");
        // setEmail("");
        // setPassword("");
      }
    }, [error]);
  
    useEffect(() => {
      if (loading) {
        console.log("loading....");
      }
    }, [loading]);
    

    

  return (
    <div>
      <div className={styles.container}>
        {/* <img src={dashboardIcon} alt="dashboard-img" /> */}
        <h2 className={styles.containerHeader}>Login</h2>
        <div className={styles.formContainer}>
          <FormField
            key={error ? Date.now() : ''}
            submitHandler={submitHandler}
            formClassname={styles.formField}
            emailPlaceholderValue="Enter registered email"
            inputEmailClass={styles.inputEmail}
            inputPasswordClass={styles.inputPassword}
            formButtonClass={styles.formButton}
            btnValue="Login"
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
        <div className={styles.orContainer}>
          <hr className={styles.horizontal} />
          <span>OR</span>
          <hr className={styles.horizontal} />
        </div>
        <div className={styles.signUpPathContainer}>
          <p>
            Yor are not registered? <Link to="/signup">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
