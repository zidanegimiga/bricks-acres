import React, { useState } from "react";
import Image from "next/image";
import {useRouter} from 'next/router'
import Button from "shared/Button";
import { RadioButton, Input, Textarea } from "shared/FormComponents";
import Modal from "shared/Modal";
import ContactModalBody from "features/Contact/ContactModalBody";
import styles from "../styles/contact.module.scss";

interface formProps {
  name: "";
  email: "";
  message: "";
}

const initialFormValues: formProps = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contactMethod, setContactMethod] = useState("");
  const [formInput, setFormInput] = useState(initialFormValues);
  const [modal, showModal] = useState(false);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const router = useRouter();

  function getTextInput(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function radioChangeHandler(e) {
    setContactMethod(e.target.value);
  }

  function resetForm() {
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
    setContactMethod("");
    setError({
      status: false,
      msg: "",
      type: "",
    });
  }

  function submissionAction() {
    const payload = {
      ...formInput,
      contactMethod: contactMethod,
    };
    console.log("Payload: ", payload);
    showModal(true);
    resetForm();
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    router.push("/contact")
    if (
      formInput.name &&
      formInput.email &&
      formInput.message &&
      contactMethod
    ) {
      submissionAction();
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  }

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.titleContainer}>
            <h1>
              Got a <span> thought</span> or <span>question</span> for us?
            </h1>
            <p className={styles.subTitle}>We&apos;d love to hear from you!</p>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contactForm}>
              <div className={styles.radioInputGroup}>
                <h4 className={styles.title}>
                  How would you like us to get back to you?
                </h4>
                <form onSubmit={handleFormSubmission}>
                  <div className={styles.radioBtns}>
                    <RadioButton
                      changed={radioChangeHandler}
                      id="1"
                      isSelected={contactMethod === "email"}
                      label="e-mail"
                      value="email"
                    />
                    <RadioButton
                      changed={radioChangeHandler}
                      id="2"
                      isSelected={contactMethod === "noReply"}
                      label="No reply needed"
                      value="noReply"
                    />
                  </div>
                  <div className={styles.textInputGroup}>
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
                    <Textarea
                      name="message"
                      onChange={(e) => getTextInput(e)}
                      label="Write us a message*"
                      value={formInput.message}
                      type="text"
                      error
                      required
                    />
                  </div>
                  <div className={styles.btnContainer}>
                    <button className={styles.btn} type="submit"> Send message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.contactsAndSocials}>
              <h4 className={styles.title}>Other ways to contact us</h4>
              <div className={styles.contacts}>
                <a>info@bricksandacres.io</a>
                <p>
                  Western Heights, 10th Floor, Kyuna Road, Westlands, Nairobi.
                </p>
              </div>
              <div className={styles.underline}></div>
              <h4 className={styles.title}>Follow us</h4>
              <div className={styles.social}>
                <div className={styles.social}>
                  <Image
                    src="/instagram.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </div>
                <p>Instagram</p>
              </div>
              <div className={styles.social}>
                <div className={styles.social}>
                  <Image
                    src="/facebook.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </div>
                <p>Facebook</p>
              </div>
              <div className={styles.social}>
                <div className={styles.social}>
                  <Image
                    src="/instagramDark.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </div>
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        modal && 
        <Modal modal showModal={showModal}>
          <ContactModalBody />
        </Modal>
      }
    </>
  );
}
