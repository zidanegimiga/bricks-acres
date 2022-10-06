import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './Nav.module.scss';
import Button from 'shared/Button';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () =>{
    if(!menuOpen){
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }
  
  const router = useRouter();
  const contactRoute = (e) =>{
    e.preventDefault();
    router.push("/contact");
    console.log("Routed");
  }

  const signUpRoute = (e) =>{
    e.preventDefault();
    router.push("/#signUp");
    console.log("Routed");
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
         <Link href="/">
           <Image width={78} height={40} src="/logo.png" alt="Bricks and Acres Logo"/>
         </Link>
        <p className={styles.title}>Bricks and Acres</p>
      </div>
      <div className={styles.navRight}>
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
          <Button text="CONTACT US" variant="outline" route="/contact"/>
          <Button text="SIGN UP" variant="fill" route="/#signUp"/>
        </div>
      </div>
      <div className={styles.menuBtn} onClick={handleClick}>
        <div className={menuOpen === true ? styles["menuBtnBurger"] +" "+ styles["open"] : styles.menuBtnBurger}>
        </div>
      </div>
      { 
        menuOpen && 
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <Link href="/"><p>Home</p></Link>
          </div>      
          <div className={styles.menuItem}>
            <Link href="/#aboutUs"><p>About us</p></Link>
          </div>      
          <div className={styles.menuItem}>
            <Link href="/#ourSolution"><p>Our solution</p></Link>
          </div>      
          <div className={styles.menuItem}>
            <Link href="/contact"><p>Contact us</p></Link>
          </div>
          <p>Get notified when the product launches? ☺</p>
          <div className={styles.btnContainer}>
            <Button text='Get notified' variant='fill' route="/#signUp"/>
          </div>      
        </div>
      }
    </div>
  )
}

const navItems = [
  {
    name: "ABOUT US",
    link: "/#aboutUs"
  },
  {
    name: "OUR SOLUTION",
    link: "/#ourSolution"
  },
]

export default Nav;