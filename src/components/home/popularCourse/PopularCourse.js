"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing the arrow icons
import styles from "./Popular.module.css";

const PopularCourse = () => {
  return (
    <>
      <div className={styles.containers}>
        <h1>Our popular courses</h1>
        <div className={styles.btnFx}>
          <p>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance
          </p>
          <div className={styles.arrowButtons}>
            {/* Left arrow button */}
            <button className={styles.arrowButton}>
              <FaArrowLeft className={styles.arrowIcon} />
            </button>

            {/* Right arrow button */}
            <button className={styles.arrowButton}>
              <FaArrowRight className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCourse;
