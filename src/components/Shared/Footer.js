"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const categories = [
    "Nutrition and diet",
    "Fitness training",
    "Mindfulness",
    "Mental health",
    "Personal growth",
    "Social well-being",
  ];
  const about = ["About us", "Our partners", "Investors", "Career"];
  const resources = [
    "FAQ",
    "Refund policies",
    "Terms and conditions",
    "Cookie",
    "Latest posts",
  ];
  const support = ["Get in touch", "Visit our forum"];

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.heading}>Categories</h3>
          <ul className={styles.list}>
            {categories.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>About</h3>
          <ul className={styles.list}>
            {about.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Resources</h3>
          <ul className={styles.list}>
            {resources.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Support</h3>
          <ul className={styles.list}>
            {support.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
