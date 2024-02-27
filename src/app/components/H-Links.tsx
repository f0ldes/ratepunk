"use client";

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../styles/Header.module.scss";

interface HeaderLinksProps {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ setDropdown }) => {
  const { isMobile } = useContext(AppContext);

  return (
    <>
      {isMobile ? (
        <div className={styles.iconStyle}>
          <a onClick={() => setDropdown(true)}>
            <img src="/assets/menu.svg" alt="Menu" />
          </a>
        </div>
      ) : (
        <div className={styles.menuDesktop}>
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
      )}
    </>
  );
};

export default HeaderLinks;
