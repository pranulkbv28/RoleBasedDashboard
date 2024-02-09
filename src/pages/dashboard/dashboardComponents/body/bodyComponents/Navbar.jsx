import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../../../firebase.init';
import styles from '../body.module.css';
import Button from '../../../../../components/Button';

const Navbar = (props) => {
    let navigate = useNavigate();

    let logoutHandler = () =>{
        auth.signOut()
          .then(()=>{
            // <Navigate to='/login' />
            // Navigate('/login');
            navigate('/login');
            console.log("User signed out");
          })
          .catch((error)=>{
            console.log("Error signing out:", error);
          })
        // console.log("clicked!!")
      }


  return (
    <div className={styles.navBar}>
      <h2>{props.userName}'s dasboard</h2> 
      <h4>{props.userRole}</h4> 
      <Button className={styles.logoutBtn} eventHandler={logoutHandler}>Log Out</Button>
    </div>
  )
}

export default Navbar
