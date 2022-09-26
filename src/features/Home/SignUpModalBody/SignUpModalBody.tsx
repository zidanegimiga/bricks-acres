import React from "react";
import Image from 'next/image'
import styles from "./SignUpModalBody.module.scss"

const SignUpModalBody = () => {
  return (
    <>
      <div className={styles.modalHeader}>
        <div className={styles.logo}>
          <Image alt="logo" width={80} height={80} src="/logo.png" />
        </div>
      </div>
      <div className={styles.modalContentBody}>
        <h1>
          Thank you
          <br /> for subscribing
        </h1>
      </div>
      <div className={styles.modalFooter}>
        <h3>Engage with us</h3>
        <div className={styles.titleUnderline}></div>
        <div className={styles.socialIcons}>
          <div className={styles.socialButton}>
            <Image
              src="/facebookDark.svg"
              width={48}
              height={48}
              alt="facebook icon"
            />
          </div>
          <div className={styles.socialButton}>
            <Image
              src="/whatsappDark.svg"
              width={48}
              height={48}
              alt="whatsapp icon"
            />
          </div>
          <div className={styles.socialButton}>
            <Image
              src="/instagramDark.svg"
              width={48}
              height={48}
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModalBody;
