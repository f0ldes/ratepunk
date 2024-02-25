'use client'

import React from "react";
import styles from '../styles/Email.module.scss';

const EmailElement = () => {

    const handleClick = () => {
        console.log('hey')
    };
    
    return (
        <div className={styles.inputContainer}>
            <div className={styles.feedBack}>
                <p>Error State</p>
            </div>
            <div className={styles.inputField}>
                <input placeholder="Enter your email address" />
                <img src="/assets/email.svg" className={styles.emailIcon} alt="Logo" />
            </div>
            <div className={styles.buttonField}>
                <button onClick={handleClick} > <strong> Get Refferal Link </strong> </button>
            </div>
        </div>
    )
};

export default EmailElement;