import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <div className={styles.menuIcon}>
          {/* SVG for the menu icon */}
          <img src="/assets/menu.svg" alt="Menu" />
        </div>
        <div>
          <div><Link href="/">Chrome Extension</Link></div>
          <div><Link href="/"> Price Comparison </Link></div>
          <div><Link className={styles.blogStyle} href="/"> Blog </Link></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
