"use client";

import React, { useContext } from "react";
import styles from "../styles/Steps.module.scss";
import { AppContext } from "../context/AppContext";

interface StepProps {
  phase: string;
  title: string;
  text: string;
  imgSrc?: string;
  imgPosition?: "left" | "right";
}

const Step: React.FC<StepProps> = ({ phase, title, text }) => (
  <div className={styles.stepStyle}>
    <div>
      <p className={styles.stepTitle}>
        <strong>{phase}</strong>
      </p>
    </div>
    <div>
      <p className={styles.stepInvite}>{title}</p>
    </div>
    <div className={styles.textContainer}>
      <p className={styles.stepText}>{text}</p>
    </div>
  </div>
);

const StepsContainer: React.FC = () => {
  const { isMobile } = useContext(AppContext);

  const stepContent: StepProps[] = [
    {
      phase: "Step 1",
      title: "INVITE FRIENDS",
      text: "Refer friends with your unique referral link.",
      imgSrc: "/assets/invite.svg",
      imgPosition: "left",
    },
    {
      phase: "Step 2",
      title: "COLLECT COINS",
      text: "Get 1 coin for each friend that installs our extension using your referral link.",
      imgSrc: "/assets/collect-coins.svg",
      imgPosition: isMobile ? "left" : "right",
    },
    {
      phase: "Step 3",
      title: "GET VOUCHER",
      text: "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
      imgSrc: "/assets/voucher.svg",
      imgPosition: "left",
    },
  ];

  return (
    <div className={styles.stepsContainer}>
      {stepContent.map(({ imgSrc, imgPosition, ...props }, index) => (
        <div key={index} className={styles.stepContainer}>
          {imgPosition === "left" && <img src={imgSrc} alt="Step image" />}
          <div className={styles.stepTextContainer}>
            <Step {...props} />
          </div>
          {imgPosition === "right" && <img src={imgSrc} alt="Step image" />}
        </div>
      ))}
    </div>
  );
};

export default StepsContainer;
