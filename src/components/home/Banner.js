"use client";

import React from "react";
import styles from "./Banner.module.css";
import bannerImg from "../../../public/banner/banner.png";
import Image from "next/image";
import IconImg from "../../../public/banner/Vector.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Button from "../button/Button";

const Banner = () => {
  const rating = 4.9;
  const reviewCount = 566;

  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className={styles.bg}>
      <div className={styles.banner}>
        {/* left side */}
        <div className={styles.textSection}>
          <div className={styles.rating}>
            <span className={styles.stars}>
              {/* Display full stars */}
              {Array(fullStars)
                .fill()
                .map((_, index) => (
                  <FaStar key={`full-star-${index}`} />
                ))}
              {halfStar && <FaStarHalfAlt key="half-star" />}
              {Array(totalStars - fullStars - (halfStar ? 1 : 0))
                .fill()
                .map((_, index) => (
                  <FaRegStar key={`empty-star-${index}`} />
                ))}
            </span>
            <span className={styles.reviews}>
              {rating} ({reviewCount})
            </span>{" "}
          </div>

          <h1 className={styles.heading}>
            #1 Platform <br /> Powering Health and Wellness
          </h1>

          <p className={styles.description}>
            We’re restoring home as the primary place of personal well-being
          </p>
          <p className={styles.descriptionP}>
            Health is not just about what you're eating. It's also about what
            you're thinking and saying
          </p>
          <div className={styles.buttons}>
            <Button> Browse Courses</Button>
            <button className={styles.getStarted}>Get Started</button>
          </div>
        </div>

        {/* right side */}
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
              <div className={styles.titlesFx}>
                <p className={styles.overlayTitle}>12,000+ </p>
                <div className={styles.LineHei}></div>
                <p className={styles.titlesDs}>
                  {" "}
                  Happy learners rely on us regularly
                </p>
              </div>
              <div className={styles.subs}>
                <div className={styles.subsFx}>
                  <h3 className={styles.subsTitle}>Find your wellbeing</h3>
                  <p className={styles.subsDes}>
                    By prioritizing self-care and making informed choices, one
                    can enhance their overall quality of life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
