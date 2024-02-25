import React from "react";
import styles from "../styles/Steps.module.scss";

const Step = () => {
  return (
    <div className={styles.stepStyle}>
      <div>
        <p className={styles.stepTitle}>
          <strong> Step 1 </strong>
        </p>
      </div>
      <div>
        <p className={styles.stepInvite}>Invite Friends</p>
      </div>
      <div>
        <p className={styles.stepText}>
          Refer friends with your unique referral link.
        </p>
      </div>
    </div>
  );
};

const StepsContainer = () => {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepContainer}>
        <img src="/assets/invite.svg" alt="invite" />
        <div className={styles.stepTextContainer}>
          <Step />
        </div>
      </div>
      <div className={styles.stepContainer}>
        <div className={styles.stepTextContainer}>
          <Step />
        </div>
        <img src="/assets/collect-coins.svg" alt="collect" />
      </div>
      <div className={styles.stepContainer}>
        <img src="/assets/voucher.svg" alt="voucher" />
        <div className={styles.stepTextContainer}>
          <Step />
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
