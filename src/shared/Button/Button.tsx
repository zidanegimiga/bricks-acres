import React from "react";
import Link from 'next/link'
import styles from "./Button.module.scss";

interface ButtonProps {
  white?: boolean,
  text: string,
  variant: string
  action?: React.MouseEventHandler<HTMLButtonElement>
  route?: string
}

export default function Button({white, text, variant,...rest }: ButtonProps) {
  const url = rest.route  

  if (variant === "fill") {
    return (
      <>
        <div className={styles.ButtonContainerFill}>
          <Link href={url}><span>{text}</span></Link>
        </div>
      </>
    );
  } 
  else if (variant === "animated" && !white) {
    return (
      <div className={styles.AnimatedButtonContainer}>
        <Link href={url}><span>{text}</span></Link>
        <div className={styles.ButtonArrow}></div>
      </div>
    );
  }
  else if(white && variant === "animated"){
    return (
      <div className={styles.AnimatedButtonContainerWhite}>
        <Link href={url}><span>{text}</span></Link>
        <div className={styles.ButtonArrow}></div>
      </div>
    );    
  }
  else {
    return (
      <>
        <div 
          className={styles.ButtonContainerOutline}
        >
          <Link href={url}><span>{text}</span></Link>
        </div>
      </>
    );
  }
}
