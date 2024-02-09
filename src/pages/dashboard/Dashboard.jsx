import React, { useState } from "react";
import styles from "./dashboard.module.css";
import { auth, firestore } from "../../firebase.init";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Body from "./dashboardComponents/body/Body";
import Sidebar from "./dashboardComponents/sidebar/Sidebar";

const Dashboard = () => {
  const uid = auth.currentUser.uid; // Use the auth object from firebase.init.js
  const rolesCollection = collection(firestore, "roles");
  let [role, setRole] = useState(null);
  let [name, setName] = useState(null);

  getDoc(doc(rolesCollection, uid))
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setRole(docSnapshot.data().role);
        setName(docSnapshot.data().name);
        console.log(`The role of the user is ${role}`);
        console.log(`The User's name is ${name}`);
      } else {
        console.log("No such document!");
      }
    })
    .catch(
      (error) => {
        console.error("Error fetching user role:", error);
      },
      [uid, rolesCollection]
    );

  getDocs(rolesCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`Document ID: ${doc.id}`);
        console.log("Document Data: ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error fetching document: ", error);
    });


  return (
    <div className={styles.dashboardBody}>
      <Sidebar userRole={role} />
      <Body userRole={role} userName={name} />
    </div>
  );

};

export default Dashboard;
