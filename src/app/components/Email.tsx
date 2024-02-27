"use client";

import React, { useContext, ChangeEvent, useState } from "react";
import styles from "../styles/Email.module.scss";
import { AppContext } from "../context/AppContext";
import { checkEmail } from "../context/emailHandler/saveEmail";

const ConfirmEmail = () => {
  return (
    <div className={styles.successField}>
      <img src="/assets/success.svg" alt="success" />
      <p>
        <strong> Your email is confirmed! </strong>
      </p>
    </div>
  );
};

type HandleErrorProps = {
  error: string;
};
const ErrorMessage: React.FC<HandleErrorProps> = ({ error }) => {
  return (
    <div className={styles.errorStyle}>
      <p>
        <strong>{error}</strong>
      </p>
    </div>
  );
};

const EmailElement = () => {
  const { email, setEmail, referalCode, updateEmailAndReferral, isMobile } =
    useContext(AppContext);
  const [error, setError] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setError("");
    }
  };

  const handleClick = async () => {
    if (email) {
      const validateEmail = checkEmail(email, error, setError);
      if (validateEmail === "emailOk") {
        await updateEmailAndReferral(email);
      }
    } else {
      setError("Email is required.");
    }
  };

  const handleCopyLink = async () => {
    const textToCopy = referalCode ? referalCode : email;
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={styles.inputContainer}>
      {referalCode && <ConfirmEmail />}
      {error && (
        <div className={styles.feedBack}>
          <ErrorMessage error={error} />
        </div>
      )}
      {!referalCode && !isMobile && (
        <>
          <div className={styles.inputField}>
            <input
              placeholder={
                referalCode ? referalCode : "Enter your email address"
              }
              value={referalCode ? referalCode : email}
              onChange={handleEmailChange}
            />
            <img
              src="/assets/email.svg"
              className={styles.emailIcon}
              alt="Logo"
            />
          </div>
          <div className={styles.buttonField}>
            <button onClick={handleClick}>
              <strong> Get Refferal Link </strong>
            </button>
          </div>
        </>
      )}
      {referalCode && !isMobile && (
        <>
          <div className={styles.referalField}>
            <input
              placeholder={referalCode}
              value={referalCode}
              onChange={handleEmailChange}
            />
            <button className={styles.copyLinkButton} onClick={handleCopyLink}>
              <strong> Copy </strong>
            </button>
          </div>
        </>
      )}
      {referalCode && isMobile && (
        <>
          <div className={styles.referalInput}>
            <input placeholder={referalCode} value={referalCode} />
          </div>
          <div className={styles.buttonField}>
            <button onClick={handleCopyLink}>
              <strong> Copy Link </strong>
            </button>
          </div>
        </>
      )}
      {!referalCode && isMobile && (
        <>
          <div className={styles.inputField}>
            <input
              placeholder={
                referalCode ? referalCode : "Enter your email address"
              }
              value={referalCode ? referalCode : email}
              onChange={handleEmailChange}
            />
            <img
              src="/assets/email.svg"
              className={styles.emailIcon}
              alt="Logo"
            />
          </div>
          <div className={styles.buttonField}>
            <button onClick={handleClick}>
              <strong> Get Refferal Link </strong>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailElement;
