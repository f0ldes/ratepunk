import React from "react";
import styles from "../styles/Footer.module.scss";

const AboutElement = () => {
  return (
    <div className={styles.aboutElement}>
      <div>
        <img src="/assets/logo.svg" alt="Logo" />
      </div>
      <div className={styles.aboutText}>
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you're getting the best deal!
        </p>
      </div>
      <div className={styles.tradeMark}>
        <p> © 2021 Ratepunk. All Rights Reserved. </p>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.linkColumn}>
        <p> QUICK LINKS</p>

        <a href="/"> Price Comparison </a>
        <a href="/"> Chrome Extension </a>
        <a href="/"> How it works </a>
        <a href="/"> Ratepunk Blog </a>
        <a href="/"> Privacy Policy </a>
      </div>
      <div className={styles.socialsColumn}>
        <div>
          <h1>Contact</h1>
          <div>
            <img src="/assets/email-footer.svg" alt="email" />
            <p> hi@ratepunk.com </p>
          </div>
        </div>
        <div>
          <h1>Social</h1>
          <div>
            <a
              className={styles.socialIconStyle}
              href="https://www.instagram.com/"
            >
              <img src="/assets/socials/instagram.svg" alt="instagram" />
            </a>
            <a
              className={styles.socialIconStyle}
              href="https://www.facebook.com/"
            >
              <img src="/assets/socials/facebook.svg" alt="facebook" />
            </a>
            <a
              className={styles.socialIconStyle}
              href="https://www.linkedin.com/"
            >
              <img src="/assets/socials/linkedin.svg" alt="linkedin" />
            </a>
            <a className={styles.socialIconStyle} href="https://www.x.com/">
              <img src="/assets/socials/twitter.svg" alt="twitter" />
            </a>
            <a
              className={styles.socialIconStyle}
              href="https://www.tiktok.com/"
            >
              <img src="/assets/socials/tiktok.svg" alt="tiktok" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tradeMarkMobile}>
        <p> © 2021 Ratepunk. All Rights Reserved. </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <AboutElement />
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
