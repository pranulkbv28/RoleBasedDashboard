import React from "react";
import styles from "../body.module.css";
import Card from "../../../../../components/Card";

const MainSection = (props) => {
  return (
    <div>
      {/* <h1>The user's role is {props.userRole}</h1> */}
      {/* <h2>The user's name is {props.userName}</h2> */}
      <div className={styles.cardHolder}>
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
        <Card cardClassName={styles.cardClass} imgClassName={styles.imgClass} />
      </div>
    </div>
  );
};

export default MainSection;
