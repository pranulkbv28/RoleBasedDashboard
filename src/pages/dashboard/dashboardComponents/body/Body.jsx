import React from 'react'
import styles from './body.module.css'
import Navbar from './bodyComponents/Navbar'
// import MainSection from './bodyComponents/MainSection'
import MainSectionContent from './bodyComponents/MainSectionContent'

const Body = (props) => {
  return (
    <div className={styles.body}>
      <Navbar userRole={props.userRole} userName={props.userName}/>
      {/* <MainSection /> */}
      <MainSectionContent  />
    </div>
  )
}

export default Body
