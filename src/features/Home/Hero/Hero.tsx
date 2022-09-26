import React from 'react';
import Button from 'shared/Button';
import Image from 'next/image'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.heroContainer} id="home">
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>Find <span>Real Estate Property</span><br/> to Buy, Sell, or Rent</h1>
          <h2 className={styles.subHeading}>Bricks & Acres is an upcoming property investment platform that allows users to discover real estate property with much ease.</h2>
          <p>Want to be notified when the product launches?</p>
          {/* <a href='#signUp'><Button text="Notify me" variant="animated" /></a> */}
          <Button text="Notify me" variant="animated" route="/#signUp"/>
        </div>
        <div className={styles.heroRight}>
          <Image src="/hero.png" alt="hero image" width={680} height={600}/>
        </div>
    </div>
  )
}

export default Hero