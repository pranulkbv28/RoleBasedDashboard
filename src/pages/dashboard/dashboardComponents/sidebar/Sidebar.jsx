import React from 'react'
import styles from './sidebar.module.css'

const Sidebar = (props) => {
  if(props.userRole==='admin'){
    return(
        <div className={styles.sidebarBody}>
            This is an {props.userRole}
        </div>
    )
  }else if(props.userRole==='user'){
    return(
        <div className={styles.sidebarBody}>
            This is a {props.userRole}
        </div>
    )
  }
}

export default Sidebar
