import React from "react";
import styles from "./Banner.module.css";
import bannerImg from "../../../public/banner/banner.png";
import Image from "next/image";
import IconImg from "../../../public/banner/Vector.png";

const Banner = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.banner}>
        <div className={styles.textSection}>
          <div className={styles.rating}>
            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            <span className={styles.reviews}>(566)</span>
          </div>
          <h1 className={styles.heading}>
            #1 Platform Powering Health and Wellness
          </h1>

          <p className={styles.description}>
            We’re restoring home as the primary place of personal well-being.
            Health is not just about what you’re eating. It’s also about what
            you’re thinking and saying.
          </p>
          <div className={styles.buttons}>
            <button className={styles.browse}>Browse Courses</button>
            <button className={styles.getStarted}>Get Started</button>
          </div>
        </div>

        <div className={styles.bannerIcons}>
            {/* icon */}
          <div className={styles.bagH}>
            <div className={styles.imageWrapper}>
              <Image
                src={IconImg}
                alt="Icon"
                className={styles.middleIcon}
                width={50}
                height={50}
              />
            </div>
          </div>
          {/* banner image */}
          <div className={styles.imageSection}>
            <Image src={bannerImg} alt="Banner" />

            <div className={styles.overlay}>
              <p className={styles.overlayTitle}>
                12,000+ Happy learners rely on us regularly
              </p>
              <span className={styles.overlayDescription}>
                By prioritizing self-care and making informed choices, one can
                enhance their overall quality of life.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
