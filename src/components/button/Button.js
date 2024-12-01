"use client";

import styles from "./Button.module.css";

const Button = ({ children, className }) => {
  return (
    <div>
      <button className={`${styles.button} ${className}`}>{children}</button>
    </div>
  );
};

export default Button;
