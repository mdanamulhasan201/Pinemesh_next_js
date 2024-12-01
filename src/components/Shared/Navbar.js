"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import cartImg from "../../../public/navbar/cart.png";
import Image from "next/image";
import Button from "../button/Button";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenDropdown(null); // Close dropdowns when toggling sidebar
  };

  return (
    <div className={styles.bg}>
      <div className={styles.navbar}>
        {/* Left Side: Logo */}
        <div className={styles.logo}>Logo</div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Middle: Navigation Links (Hidden on Mobile) */}
        <div className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <div className={styles.dropdown}>
            <button
              className={styles.dropbtn}
              onClick={() => handleDropdown("courses")}
            >
              Courses
              <span className={styles.icon}>
                {openDropdown === "courses" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === "courses" ? styles.show : ""
              }`}
            >
              <a href="#">Course 1</a>
              <a href="#">Course 2</a>
              <a href="#">Course 3</a>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button
              className={styles.dropbtn}
              onClick={() => handleDropdown("instructors")}
            >
              Instructors
              <span className={styles.icon}>
                {openDropdown === "instructors" ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </button>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === "instructors" ? styles.show : ""
              }`}
            >
              <a href="#">Instructor 1</a>
              <a href="#">Instructor 2</a>
              <a href="#">Instructor 3</a>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button
              className={styles.dropbtn}
              onClick={() => handleDropdown("blogs")}
            >
              Blogs
              <span className={styles.icon}>
                {openDropdown === "blogs" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === "blogs" ? styles.show : ""
              }`}
            >
              <a href="#">Blog 1</a>
              <a href="#">Blog 2</a>
              <a href="#">Blog 3</a>
            </div>
          </div>

          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Right Side: Cart and Login */}
        <div className={`${styles.actions} ${styles.desktopOnly}`}>
          <div className={styles.cart}>
            <Image src={cartImg} alt="cart" />
          </div>
          {/* <button className={styles.login}>Login</button> */}
          <Button>Login</Button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.showSidebar : ""}`}
      >
        <div className={styles.marinTop}>
          <div className={styles.sidebarContent}>
            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropbtn}
                onClick={() => handleDropdown("mobileCourses")}
              >
                Courses
                <span className={styles.icon}>
                  {openDropdown === "mobileCourses" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </button>
              <div
                className={`${styles.mobileDropdownContent} ${
                  openDropdown === "mobileCourses" ? styles.show : ""
                }`}
              >
                <a href="#">Course 1</a>
                <a href="#">Course 2</a>
                <a href="#">Course 3</a>
              </div>
            </div>

            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropbtn}
                onClick={() => handleDropdown("mobileInstructors")}
              >
                Instructors
                <span className={styles.icon}>
                  {openDropdown === "mobileInstructors" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </button>
              <div
                className={`${styles.mobileDropdownContent} ${
                  openDropdown === "mobileInstructors" ? styles.show : ""
                }`}
              >
                <a href="#">Instructor 1</a>
                <a href="#">Instructor 2</a>
                <a href="#">Instructor 3</a>
              </div>
            </div>

            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropbtn}
                onClick={() => handleDropdown("mobileBlogs")}
              >
                Blogs
                <span className={styles.icon}>
                  {openDropdown === "mobileBlogs" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </button>
              <div
                className={`${styles.mobileDropdownContent} ${
                  openDropdown === "mobileBlogs" ? styles.show : ""
                }`}
              >
                <a href="#">Blog 1</a>
                <a href="#">Blog 2</a>
                <a href="#">Blog 3</a>
              </div>
            </div>

            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
