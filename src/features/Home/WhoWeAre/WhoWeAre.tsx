import React from 'react';
import Image from 'next/image';
import styles from './WhoWeAre.module.scss'
import Button from 'shared/Button';

const WhoWeAre = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.bgImageContainer}>
        <Image src="/strokedCircle.png" width={931} height={737} alt="stroked circle"/>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentLeft}>
          <div className={styles.imageBackground}>
            <div className={styles.imageContainer}>
              <Image src="/whoWeAre.png" width={450} height={695} alt="Who we are Image"/>
            </div>
          </div>
        </div>
        <div className={styles.sectionContentRight}>
          <div className={styles.sectionSubHeading}>
            <p>WHO WE ARE</p>
            <div className={styles.sectionHeadingUnderline}></div>
          </div>
          <div className={styles.sectionHeading}>
            <h2>Our Mission is to<br/><span>Redefine Real Estate </span>in the<br />Customer&apos;s Favor</h2>
          </div>
          <div className={styles.sectionDescription}>
            <p>Bricks & Acres is an upcoming property investment platform that allows users to discover real estate property with much ease.</p>
          </div>
          <Button white variant="animated" text="Sign up for Early Access"/>          
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre