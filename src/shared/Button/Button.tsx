import React from "react";
import styles from "./Button.module.scss";

export default function Button({ text, variant }) {
  if (variant === "fill") {
    return (
      <>
        <div className={styles.ButtonContainerFill}>{text}</div>
      </>
    );
  } else if (variant === "animated") {
    return (
      <div className={styles.AnimatedButtonContainer}>
        <span>{text}</span>
        <div className={styles.ButtonArrow}></div>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.ButtonContainerOutline}>{text}</div>
      </>
    );
  }
}
