"use client";

import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import HeaderLinks from "./H-Links";

interface MobileHeaderProps {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setDropdown }) => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <div className={styles.mobileIconContainer}>
        <img className={styles.iconStyle} src="/assets/logo.svg" alt="Logo" />
        <a onClick={() => setDropdown(false)}>
          <img
            className={styles.iconStyle}
            src="/assets/close.svg"
            alt="close"
          />
        </a>
      </div>
      <div className={styles.dropdownLinks}>
        <div className={styles.linkStyle}>
          <a href="/">
            <p> Chrome Extension </p>
          </a>
        </div>
        <div className={styles.linkStyle}>
          <a href="/">
            <p> Price Comparsion </p>
          </a>
        </div>
        <div className={styles.linkStyle}>
          <a href="/">
            <p> Blog </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [dropDown, setDropdown] = useState<boolean>(false);

  return (
    <header className={dropDown ? styles.headerDropdown : styles.header}>
      <nav className={styles.navStyle}>
        {!dropDown ? (
          <>
            <div className={styles.headerContainerStyle}>
              <img
                className={styles.iconStyle}
                src="/assets/logo.svg"
                alt="Logo"
              />
            </div>
            <div className={styles.headerContainerStyleLeft}>
              <HeaderLinks setDropdown={setDropdown} />
            </div>
          </>
        ) : (
          <MobileHeader setDropdown={setDropdown} />
        )}
      </nav>
    </header>
  );
};

export default Header;
