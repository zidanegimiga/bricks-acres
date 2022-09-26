import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  white?: boolean,
  text: string,
  variant: string
  action?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({white, text, variant, action }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <div className={styles.ButtonContainerFill} onClick={action}>{text}</div>
      </>
    );
  } 
  else if (variant === "animated" && !white) {
    return (
      <div className={styles.AnimatedButtonContainer} onClick={action}>
        <span>{text}</span>
        <div className={styles.ButtonArrow}></div>
      </div>
    );
  }
  else if(white && variant === "animated"){
    return (
      <div className={styles.AnimatedButtonContainerWhite} onClick={action}>
        <span>{text}</span>
        <div className={styles.ButtonArrow}></div>
      </div>
    );    
  }
  else {
    return (
      <>
        <div 
          className={styles.ButtonContainerOutline}
          onClick={action}
        >
          {text}
        </div>
      </>
    );
  }
}
