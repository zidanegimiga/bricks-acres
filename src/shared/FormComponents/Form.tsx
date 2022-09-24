import React, { useRef, useEffect, ChangeEvent, useState } from "react";
import styles from "./Form.module.scss";

export const Input = ({error, label, ...rest }) => {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <input
        className={styles.formInput}
        {...rest}
        onBlur={() => setTouched(true)}
        placeholder={rest.name}
        type={rest.type}
      />
      <span className={styles.textDanger}>{touched && error}</span>
    </>
  );
};

interface formProps {
  name: string,  
  email: string,
  developer: boolean,
  investor: boolean,
  tenant: boolean
}

const initialFormValues: formProps = {
  name: "",  
  email: "",
  developer: false,
  investor: false,
  tenant: false   
}

export const Form = () => {
  const [formInput, setFormInput] = useState(initialFormValues)
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  function getCheckboxValue(e){
    const name = e.target.name
    const check = formInput.name
    const value = !check
    setFormInput({
      ...formInput,
      [name]: !value
    })
  }

  function getTextInput(e){
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  // Clear Form  
  const resetForm = () => {
    setFormInput({
      name: "",
      email: "",
      developer: false,
      investor: false,
      tenant: false
    })
    setError({
      status: false,
      msg: "",
      type: ""
    })
  }

  function submissionAction(){
    const data = formInput;
    console.log(data);
    setError({ status: true, msg: "Signed up successfully!", type: 'success' })
    setTimeout(() => resetForm(), 5000)
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.name && formInput.email) {
      submissionAction()
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <Input
            name="name"
            onChange={(e) => getTextInput(e)}
            label="Name"
            value={formInput.name}
            type="text"
            error            
            required
          />
          <Input
            name="email"
            onChange={(e) => getTextInput(e)}
            label="E-mail"
            value={formInput.email}
            type="email"
            error
          />
        </div>
        <div className={styles.radioInputGroup}>        
          <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                name="developer"
                checked={formInput.developer}
                onChange={(e) => getCheckboxValue(e)}
              />
            <label htmlFor="developer">
              Developer       
            </label>
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="investor"
              checked={formInput.investor}
              onChange={(e) => getCheckboxValue(e)}
            />
            <label htmlFor="investor">
              Investor       
            </label>
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="tenant"
              checked={formInput.tenant}
              onChange={(e) => getCheckboxValue(e)}
            />
            <label htmlFor="tenant">
              Tenant       
            </label>
          </div>
        </div>
        {error.status ? <p className={styles.errorMessage}>{error.msg}</p> : null}
        <div className={styles.buttonWrapper}>
          <p>*We promise not to spam you :)</p>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
