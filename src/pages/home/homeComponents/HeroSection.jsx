import React from 'react'
import Li from '../../../components/Li'
import styles from './heroSection.module.css';

const HeroSection = (props) => {
  return (
    <section className={props.className}>
            <h1>
                Why do you need your own Dashboard:
            </h1>
            <ul className={styles.heroUl}>
                <Li className={styles.heroLi}>Data Visualization</Li>
                <Li className={styles.heroLi}>Real-Time Data Monitoring</Li>
                <Li className={styles.heroLi}>EfficiencyDecision-Making</Li>
                <Li className={styles.heroLi}>Accessibility</Li>
            </ul>
    </section>  
  )
}

export default HeroSection
