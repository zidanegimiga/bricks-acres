import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './Nav.module.scss';
import Button from 'shared/Button';

const Nav = () => {
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
          <Button text="CONTACT US" variant="outline" action={(e) => contactRoute(e)}/>
          <Button text="SIGN UP" variant="fill" action={(e) => signUpRoute(e)}/>
        </div>
      </div>
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