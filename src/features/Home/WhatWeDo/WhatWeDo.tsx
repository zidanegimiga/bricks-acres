import React from 'react';
import Image from 'next/image';
import styles from './WhatWeDo.module.scss'
import Button from 'shared/Button';

const WhoWeAre = () => {
  return (
    <div className={styles.sectionContainer} id="ourSolution">
      <div className={styles.bgImageContainer}>
        <Image src="/strokedCircleLeft.png" width={931} height={737} alt="stroked circle"/>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentRight}>
          <div className={styles.sectionSubHeading}>
            <p>WHAT WE DO</p>
            <div className={styles.sectionHeadingUnderline}></div>
          </div>
          <div className={styles.sectionHeading}>
            <h2><span>Providing Value</span><br/>Across the<br/>Real Estate Industry</h2>
          </div>
          <div className={styles.sectionDescription}>
            <p>By combining our deep knowledge and understanding of the real estate scene, We believe we have found the undervalued properties being overlooked by the general market and transform them into catalysts of change.</p>
          </div>
          <Button variant="animated" text="Sign up for Early Access"/>          
        </div>
        <div className={styles.sectionContentLeft}>
          <div className={styles.imageBackground}>
            <div className={styles.imageContainer}>
              <Image src="/whatWeDo.png" width={450} height={695} alt="Who we are Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre