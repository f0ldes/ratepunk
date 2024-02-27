import React from "react";
import styles from '../styles/MainContent.module.scss'
import EmailElement from "./Email";
import StepsContainer from "./Steps";


const TextElement = () => {
    return (
        <>
            <div className={styles.titlePanel}>
                <p> <strong> REFER FRIENDS AND GET REWARDS </strong> </p>
            </div>
            <div className={styles.textPanel}>
                <p>
                Refer your friends to us and earn hotel booking vouchers. 
                We'll give you 1 coin for each friend that installs our extension. 
                Minimum cash-out at 20 coins.
                </p>
            </div>
        </>
    )
};

const MainContent = () => {

  return (
    <div className={styles.mainContent}>
      <div className={styles.leftElement}>
        <div>
          <TextElement />
          <EmailElement />
        </div>
        <div className={styles.boxSpace} ></div>
        <div>
          <p className={styles.bottomText}>Limits on max rewards apply.</p>
        </div>
      </div>
      <div className={styles.rightElement}>
        <StepsContainer />
      </div>
    </div>
  );
};

export default MainContent;