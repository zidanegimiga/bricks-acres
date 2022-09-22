import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss';
import Button from 'shared/Button';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSide}>
        <Image width={84} height={40} src="/logo.png" alt="Bricks and Acres Logo"/>
        <p className={styles.title}>Bricks and Acres</p>
      </div>
      <div className={styles.navMenuItems}>
        {
          navItems?.map((item, index) => (
            <div className={styles.navItem} key={index}>
              <Link href={item.link}>
                <a className={styles.itemTitle}> {item.name} 
                 <div className={styles.underScore}></div>
                </a>
              </Link>              
            </div>
          ))
        }
      </div>
      <div className={styles.buttonsContainer}>
        <Button text="CONTACT US" variant="outline"/>
        <Button text="SIGN UP" variant="fill"/>
      </div>
    </div>
  )
}

const navItems = [
  {
    name: "ABOUT US",
    link: "/about-us"
  },
  {
    name: "OUR SOLUTION",
    link: "/our-solution"
  },
]

export default Nav;