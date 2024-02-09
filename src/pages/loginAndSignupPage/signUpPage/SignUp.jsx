import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import dashboardIcon from "../../../assets/images/dashboardIcon.avif";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../../../firebase.init";
import SignupFormField from "../loginSignupComponents/SignUpFormField";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  let [name, setName] = useState(" ");
  let [email, setEmail] = useState(" ");
  let [password, setPassword] = useState(" ");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, user);
    createUserWithEmailAndPassword(email, password);
  };

  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth);

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
      if (user) {
        navigate('/dashboard')
        console.log(user);
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
      <div>
        <div className={styles.container}>
          <img src={dashboardIcon} alt="dashboard-img" />
          <div className={styles.signUpDeets}>
            <div className={styles.formContainer}>
              <h2 className={styles.containerHeader}>SignUp</h2>
              <SignupFormField
                key={error ? Date.now() : ''}
                submitHandler={submitHandler}
                formClassname={styles.formField}
                inputNameClass={styles.inputName}
                name={name}
                setName={setName}
                emailPlaceholderValue="Enter a valid email"
                inputEmailClass={styles.inputEmail}
                inputPasswordClass={styles.inputPassword}
                formButtonClass={styles.formButton}
                btnValue="SignUp"
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
            <div className={styles.loginPathContainer}>
              <p>
                You are already a member? <Link to="/login">Click here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
