"use client";

import { useState, useEffect } from "react";
import styles from "./Customer.module.css";
import reviewImg from "../../../../public/reviews/reviewImg.png";
import Image from "next/image";
import icons from "../../../../public/reviews/Vector.png";

const originalData = [
  {
    id: 1,
    name: "Kilian Murphe",
    review:
      "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    image: reviewImg,
  },
  {
    id: 2,
    name: "Kilian Murphe",
    review:
      "I am very happy with the course. It is very informative and the instructor is very knowledgeable.",
    image: "",
  },
  {
    id: 3,
    name: "Kilian Murphe",
    review:
      "I am very happy with the course. It is very informative and the instructor is very knowledgeable.",
    image: reviewImg,
  },
  {
    id: 4,
    name: "Kilian Murphe",
    review:
      "I am very happy with the course. It is very informative and the instructor is very knowledgeable.",
    image: reviewImg,
  },
  {
    id: 5,
    name: "Kilian Murphe",
    review:
      "I am very happy with the course. It is very informative and the instructor is very knowledgeable.",
    image: reviewImg,
  },
  {
    id: 6,
    name: "Kilian Murphe",
    review:
      "I am very happy with the course. It is very informative and the instructor is very knowledgeable.",
    image: reviewImg,
  },
];

const data = [...originalData, ...originalData]; 
const ITEMS_VISIBLE = 6;
const AUTO_SCROLL_INTERVAL = 5000; 
const TRANSITION_DURATION = 800; 
const DOTS_COUNT = 5; 

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === data.length - ITEMS_VISIBLE) {
        setTimeout(() => {
          setIsAnimating(false);
          setCurrentIndex(0);
        }, TRANSITION_DURATION);
        return prevIndex + 1; 
      }
      setIsAnimating(true);
      return prevIndex + 1;
    });
  };

  const handleDotClick = (dotIndex) => {
    setIsAnimating(true);
    setCurrentIndex(dotIndex * ITEMS_VISIBLE);
  };

  return (
    <div className={styles.mainContents}>
      <h2 className={styles.titles}>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
      <div className={styles.carousel}>
        <div
          className={styles.cardFx}
          style={{
            transform: `translateX(-${(currentIndex * (100 / ITEMS_VISIBLE))}%)`,
            transition: isAnimating ? `transform ${TRANSITION_DURATION}ms ease-in-out` : "none",
          }}
        >
          {data.map((item, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewImg}>
                <Image src={item.image || reviewImg} alt="review" />
                <Image src={icons} alt="icons" />
              </div>
              <h4>{item.name}</h4>
              <div className={styles.reviewContent}>
                <p>"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className={styles.dots}>
        {Array.from({ length: DOTS_COUNT }).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              Math.floor(currentIndex / ITEMS_VISIBLE) % DOTS_COUNT === index ? styles.activeDot : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
