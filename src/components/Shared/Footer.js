"use client";

import React from "react";
import styles from "./Footer.module.css";
import instagram from "../.../../../../public/footer/instragram.png";
import twitter from "../.../../../../public/footer/twitter.png";
import facebook from "../.../../../../public/footer/facebook.png";
import discord from "../.../../../../public/footer/e.png";
import Image from "next/image";
import Link from "next/link";

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
      {/* sub footer */}
      <div className={styles.mainSubFt}>
        <div className={styles.subFooter}>
          <h1 className={styles.subFtTitle}>Join our official channels</h1>
          <div className={styles.linkup}>
            <Link href="/">
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </Link>
            <Link href="/">
              <Image src={twitter} alt="twitter" width={22} height={22} />
            </Link>
            <Link href="/">
              <Image src={facebook} alt="facebook" width={26} height={26} />
            </Link>
            <Link href="/">
              <Image src={discord} alt="discord" width={26} height={26} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>© {new Date().getFullYear()} EduPath. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
