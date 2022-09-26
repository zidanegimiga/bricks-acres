/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, Suspense } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";
import Modal from '../../../shared/Modal'
import Button from "shared/Button";
import { Form } from "shared/FormComponents/Form";
import styles from "./SignUpForm.module.scss";
import SignUpModalBody from '../SignUpModalBody'

const SignUpForm = () => {
  const [modal, showModal] = useState(false);
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className={styles.sectionContainer} id="signUp">
      <div className={styles.sectionTitle}>
        <h2>PRODUCT DEVELOPMENT ONGOING</h2>
        <div className={styles.sectionHeadingUnderline}></div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentRight}>
          <div className={styles.contentTitle}>
            <h3>Sign up for Early Access</h3>
            <div className={styles.contentHeadingUnderline}></div>
            <div className={styles.formAndVideoContainer}>
              <div className={styles.formContainer}>
                <Form showModal={()=> showModal(!modal)}/>
              </div>
                <div className={styles.video}>
                  <video
                    src="https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_5mb.mp4"
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                  />
                  <div className={styles.controls}>
                    <div className={styles.actions}>
                      <button onClick={togglePlay} className={styles.btnPlay}>
                        {!playerState.isPlaying ? (
                        <img alt="Play" width={24} height={24} src="/bx-play.svg"/>
                        ) : (
                          <img alt="Play" width={24} height={24} src="/bx-pause.svg"/>
                        )}
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={playerState.progress}
                      onChange={(e) => handleVideoProgress(e)}
                      className={styles.inputRange}
                    />
                    <select
                      className={styles.velocity}
                      value={playerState.speed}
                      onChange={(e) => handleVideoSpeed(e)}
                    >
                      <option value="0.50">0.50x</option>
                      <option value="1">1x</option>
                      <option value="1.25">1.25x</option>
                      <option value="2">2x</option>
                    </select>
                    <button className={styles.volumeBtn} onClick={toggleMute}>
                      {!playerState.isMuted ? (
                        <img alt="Play" width={24} height={24} src="/bxs-volume-full.svg"/>
                      ) : (
                        <img alt="Play" width={24} height={24} src="/bxs-volume-mute.svg"/>
                      )}
                    </button>
                  </div>
                </div>             
            </div>
          </div>
        </div>
        <div className={styles.sectionContentLeft}></div>
      </div>
      {
        modal && 
        <Modal modal showModal={showModal}>
          <SignUpModalBody />
        </Modal>
      }
    </div>
  );
};

export default SignUpForm;
