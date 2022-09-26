import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.footerLogo}>
            <Image alt="Bricks and Acres Logo" width={200} height={190} src="/logo-bg-dark.png"/>
          </div>
          <div className={styles.footerContacts}>
            <h3 className={styles.sectionTitle}>CONNECT WITH US</h3>
            <Link href="/contact"> 
              <p className={styles.contactUs}>Contact us</p>
            </Link>
            <p className={styles.contact}>info@bricksandacres.io</p>
            <p className={styles.contact}>Western Heights, 10th Floor,<br/>Karuna Road, Westlands, Nairobi.</p>
          </div>
          <div className={styles.footerSocials}>
            <h3 className={styles.sectionTitle}>FOLLOW US</h3>
            <div className={styles.socialButtons}>
              <div className={styles.socialButton}>
                <Image src="/facebook.png" width={32} height={32} alt="facebook icon"/>
              </div>
              <div className={styles.socialButton}>
                <Image src="/whatsApp.png" width={32} height={32} alt="whatsapp icon"/>
              </div>
              <div className={styles.socialButton}>
                <Image src="/instagram.png" width={32} height={32} alt="instagram icon"/>
              </div>
            </div>        
          </div>
          <div className={styles.scrollToTopContainer}>
            <div className={styles.arrowUpContainer} >
              <Link href="/">
                <Image src="/arrow-up.png" alt="Arrow up icon" width={32} height={32}/>
              </Link>
            </div>
            <p>Scroll to top</p>
          </div>
        </div>
      </div>
      <div className={styles.footerIllustration}>
        <Image src="/footerIllustration.png" width={2000} height={400} alt="footer illustration"/>        
      </div>
      <div className={styles.copyright}>
        <p>© 2022 Bricks and Acres | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer