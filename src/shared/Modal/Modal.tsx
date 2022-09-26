import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import styles from "./Modal.module.scss";

const Modal = ({...props}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(()=> {setIsBrowser(true);}, []);

  const modalContent = props.modal ? (
      <div className={styles.modalOverlay} onClick={() => props.showModal(false)}>
        <div className={styles.centered}>
          <div className={styles.modalBody}>
            <button
              className={styles.closeBtn}
              onClick={() => props.showModal(false)}
            ></button>
            <div className={styles.children}>{props.children}</div>
          </div>
        </div>
    </div>
  ): null;

  if(isBrowser){
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
};

export default Modal;
