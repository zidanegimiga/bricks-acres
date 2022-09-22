import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  white?: boolean,
  text: string,
  variant: string
}

export default function Button({white, text, variant }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <div className={styles.ButtonContainerFill}>{text}</div>
      </>
    );
  } 
  else if (variant === "animated" && !white) {
    return (
      <div className={styles.AnimatedButtonContainer}>
        <span>{text}</span>
        <div className={styles.ButtonArrow}></div>
      </div>
    );
  }
  else if(white && variant === "animated"){
    return (
      <div className={styles.AnimatedButtonContainerWhite}>
        <span>{text}</span>
        <div className={styles.ButtonArrow}></div>
      </div>
    );    
  }
  else {
    return (
      <>
        <div className={styles.ButtonContainerOutline}>{text}</div>
      </>
    );
  }
}
