"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import cartImg from "../../../public/navbar/cart.png";
import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    {
      name: "Courses",
      items: ["Course 1", "Course 2", "Course 3"],
    },
    {
      name: "Instructors",
      items: ["Instructor 1", "Instructor 2", "Instructor 3"],
    },
    {
      name: "Blogs",
      items: ["Blog 1", "Blog 2", "Blog 3"],
    },
  ];

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenDropdown(null);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.navbar}>
        {/* Left Side: Logo */}
        <div className={styles.logo}>
          <Link href="/">Logo</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Middle: Navigation Links (Hidden on Mobile) */}
        <div className={`${styles.navLinks} ${styles.desktopOnly}`}>
          {navLinks.map((link, index) => (
            <div key={index} className={styles.dropdown}>
              <button
                className={styles.dropbtn}
                onClick={() => handleDropdown(link.name)}
              >
                {link.name}
                <span className={styles.icon}>
                  {openDropdown === link.name ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>
              <div
                className={`${styles.dropdownContent} ${
                  openDropdown === link.name ? styles.show : ""
                }`}
              >
                {link.items.map((item, itemIndex) => (
                  <Link key={itemIndex} href="#">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* About and Contact Links */}
          <Link className={styles.fnt} href="about">
            About
          </Link>
          <Link className={styles.fnt} href="contact">
            Contact
          </Link>
        </div>

        {/* Right Side: Cart and Login */}
        <div className={`${styles.actions} ${styles.desktopOnly}`}>
          <div className={styles.cart}>
            <Image src={cartImg} alt="cart" />
          </div>
          <Button>Login</Button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.showSidebar : ""}`}
      >
        <div className={styles.marinTop}>
          <div className={styles.sidebarContent}>
            {navLinks.map((link, index) => (
              <div key={index} className={styles.mobileDropdown}>
                <button
                  className={styles.mobileDropbtn}
                  onClick={() => handleDropdown(`mobile${link.name}`)}
                >
                  {link.name}
                  <span className={styles.icon}>
                    {openDropdown === `mobile${link.name}` ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </span>
                </button>
                <div
                  className={`${styles.mobileDropdownContent} ${
                    openDropdown === `mobile${link.name}` ? styles.show : ""
                  }`}
                >
                  {link.items.map((item, itemIndex) => (
                    <Link key={itemIndex} href="#">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Links for About and Contact */}
            <Link href="about">About</Link>
            <Link href="contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
