import React from 'react'
import styles from '../home/home.module.css';
import { Link } from 'react-router-dom'
import Li from '../../components/Li';
import HeroSection from './homeComponents/HeroSection';
import Button from '../../components/Button';


const Home = () => {
  return (
    <div className={styles.mainBody}>
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <Li className={styles.navLi}><Link to='/login'>Login</Link></Li>
                <Li className={styles.navLi}><Link>FAQ</Link></Li>
                <Li className={styles.navLi}><Link>Contact Us</Link></Li>
            </ul>
        </nav>
        <HeroSection className={styles.heroSection} />
        <h2 className={styles.heading}>
            Get started with your own personalised dashboard to maintain your progress and other goals.
        </h2>
        <div className={styles.btnContainer}>
            <Button className={styles.btn}><Link to='/login'>Join Us!</Link></Button>
        </div>
    </div>
  )
}

export default Home
