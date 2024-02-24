import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import logo from "../../../public/assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <div>
          <div><Link href="/">Chrome Extension</Link></div>
          <div><Link href="/"> Price Comparison </Link></div>
          <div ><Link className={styles.blogStyle} href="/"> Blog </Link></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
