"use client";

import React, { useState } from "react";
import styles from "./WeProvide.module.css";
import bannerImg from "../../../../public/weProvide/image.png";
import Image from "next/image";
import IconImg from "../../../../public/weProvide/Vector.png";
import { IoCheckmarkCircle } from "react-icons/io5";

const data = [
  {
    id: 1,
    icon: <IoCheckmarkCircle size={24} />,
    text: "Personalized routine",
    describe:
      "We provide personalized routines for each individual based on their health condition and requirements.",
  },
  {
    id: 2,
    icon: <IoCheckmarkCircle size={24} />,
    text: "Follow-up after completing courses",
    describe:
      "We ensure follow-ups after completing courses to ensure lasting results and guidance.",
  },
  {
    id: 3,
    icon: <IoCheckmarkCircle size={24} />,
    text: "Access to additional resources",
    describe:
      "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
  },
  {
    id: 4,
    icon: <IoCheckmarkCircle size={24} />,
    text: "Free community support",
    describe:
      "Join a community of like-minded individuals, offering free support, advice, and encouragement to help you on your journey.",
  },
];

const WeProvide = () => {
  const [activeId, setActiveId] = useState(3);

  const handleClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.banner}>
      {/* Left side */}
      <div className={styles.textSection}>
        <h1 className={styles.heading}>We provide...</h1>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.iconWith} ${
              activeId === item.id ? styles.active : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <div
              className={`${styles.icon} ${
                activeId === item.id ? styles.activeIcon : ""
              }`}
            >
              {item.icon}
            </div>

            <div>
              <p className={styles.text}>{item.text}</p>
              {activeId === item.id && (
                <p className={`${styles.describe} ${styles.smooth}`}>
                  {item.describe}
                </p>
              )}
            </div>
          </div>
        ))}
        <div>
          <button className={styles.getStarted}>
            Learn More About Our Services
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className={styles.bannerIcons}>
        {/* Icon */}
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
        {/* Banner image */}
        <div className={styles.imageSection}>
          <Image src={bannerImg} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
