import React from "react";
import styles from '../styles/Links.module.scss'

const LinkButton = () => {
    return (
        <div className={styles.linkButton}>
            <a href="https://www.ratepunk.com/">
                <div>
                    <img src="/assets/chrome.svg" alt="chrome" />
                </div>
                <div>
                    <p>avaible in the</p>
                    <h1>chrome webstore</h1>
                </div>
            </a>
        </div>
    )
};

const RatingElement = () => {
    return (
        <div className={styles.ratingContainer}>
            <img src="/assets/stars-white.svg" alt="chrome" />
            <p>Chrome Store reviews</p>
        </div>
    )
};

const LinkButtons = () => {
  return (
    <div className={styles.linkButtonsContainer}>
      <LinkButton />
      <LinkButton />
    </div>
  );
};

const LinkSection = () => {
    return (
        <div className={styles.linkElement}>
            <LinkButtons />
            <RatingElement />
        </div>
    )
};


export default LinkSection;