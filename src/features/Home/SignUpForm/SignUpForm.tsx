import React, { useState } from "react";
import Button from "shared/Button";
import {Form} from "shared/FormComponents/Form";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2>PRODUCT DEVELOPMENT ONGOING</h2>
        <div className={styles.sectionHeadingUnderline}></div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentRight}>
          <div className={styles.contentTitle}>
            <h3>Sign up for Early Access</h3>
            <div className={styles.contentHeadingUnderline}></div>
            <div className={styles.formContainer}>
              <Form />
            </div>
            <div className={styles.video}>
              <video />
            </div>
          </div>
        </div>
        <div className={styles.sectionContentLeft}></div>
      </div>
    </div>
  );
};

export default SignUpForm;

{/* <form>
  <fieldset className={styles.inputGroup}>
    <input
      name="firstName"
      id="firstName"
      type="text"
      placeholder="First Name"
      required
      className={styles.input}
    />
    <input
      name="email"
      id="email"
      type="email"
      placeholder="Email"
      required
      className={styles.input}
    />
  </fieldset>
  <fieldset className={styles.radioInputGroup}>
    <label htmlFor="tenant" className={styles.radioInputLabel}>
      <input
        name="tenant"
        id="tenant"
        type="checkbox"
        className={styles.radioInput}
        value="tenant"
      />
      tenant
    </label>
    <label htmlFor="developer" className={styles.radioInputLabel}>
      <input
        name="developer"
        id="developer"
        type="checkbox"
        className={styles.radioInput}
        value="developer"
      />
      Developer
    </label>
    <label htmlFor="investor" className={styles.radioInputLabel}>
      <input
        name="investor"
        id="investor"
        type="checkbox"
        className={styles.radioInput}
        value="investor"
      />
      Investor
    </label>
  </fieldset>
  <button className={styles.signUpButton} type="submit">
    Login
  </button>
</form>; */}
