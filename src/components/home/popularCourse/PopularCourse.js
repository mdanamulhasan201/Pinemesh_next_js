"use client";

import styles from "./Popular.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import bannerImg1 from "../../../../public/popular_course/image_1.png";
import bannerImg2 from "../../../../public/popular_course/image_2.png";
import bannerImg3 from "../../../../public/popular_course/image_3.png";
import bannerImg4 from "../../../../public/popular_course/image_4.png";
import teacherImg1 from "../../../../public/popular_course/teacher/image_1.png";
import teacherImg2 from "../../../../public/popular_course/teacher/image_2.png";
import teacherImg3 from "../../../../public/popular_course/teacher/image_3.png";
import teacherImg4 from "../../../../public/popular_course/teacher/image_4.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    image: bannerImg1,
    type: "beginner",
    health: "Nutrition and Diet",
    title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    rating: 4.9,
    reviewCount: 566,
    time: "6h 34m",
    lessons: 3,
    teacher: "Kilian Murphe",
    teacherImg: teacherImg1,
    price: 40,
  },
  {
    id: 2,
    image: bannerImg2,
    type: "intermediate",
    health: "Health and Wellness",
    title: "Parenting in the Digital Age: Navigating Screen Time",
    rating: 4.9,
    reviewCount: 456,
    time: "6h 34m",
    lessons: 3,
    teacher: "Sarah Hopkins",
    teacherImg: teacherImg2,
    price: 50,
  },
  {
    id: 3,
    image: bannerImg3,
    type: "beginner",
    health: "Nutrition and Diet",
    title: "Holistic Health: Integrating Mind, Body, and Spirit",
    rating: 4.9,
    reviewCount: 389,
    time: "6h 34m",
    lessons: 3,
    teacher: "Luna Karim",
    teacherImg: teacherImg3,
    price: 60,
    payment: "done",
  },
  {
    id: 4,
    image: bannerImg4,
    type: "Beginner",
    health: "Nutrition and Diet",
    title: "Introduction to healthy Diet and Nutrition",
    rating: 4.9,
    reviewCount: 566,
    time: "6h 34m",
    lessons: 3,
    teacher: "Kate Winslate",
    teacherImg: teacherImg4,
    price: 100,
  },
  {
    id: 5,
    image: bannerImg1,
    type: "beginner",
    health: "Nutrition and Diet",
    title: "Yoga for Beginners",
    rating: 4.8,
    reviewCount: 320,
    time: "5h 00m",
    lessons: 5,
    teacher: "John Doe",
    teacherImg: teacherImg1,
    price: 45,
  },
  {
    id: 6,
    image: bannerImg2,
    type: "intermediate",
    health: "Health and Wellness",
    title: "Meditation for Mental Clarity",
    rating: 4.7,
    reviewCount: 210,
    time: "4h 30m",
    lessons: 4,
    teacher: "Jane Smith",
    teacherImg: teacherImg2,
    price: 60,
  },
  {
    id: 7,
    image: bannerImg3,
    type: "beginner",
    health: "Nutrition and Diet",
    title: "Healthy Living: A Beginner's Guide",
    rating: 4.6,
    reviewCount: 320,
    time: "5h 30m",
    lessons: 6,
    teacher: "Sam Brown",
    teacherImg: teacherImg3,
    price: 55,
  },
  {
    id: 8,
    image: bannerImg4,
    type: "Beginner",
    health: "Nutrition and Diet",
    title: "Introduction to Healthy Diet and Nutrition",
    rating: 4.9,
    reviewCount: 500,
    time: "6h 00m",
    lessons: 4,
    teacher: "Kate Winslate",
    teacherImg: teacherImg4,
    price: 70,
  },
];

const PopularCourse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const totalItems = data.length;

  // Ensure infinite looping by resetting after last set
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(totalItems / cardsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(totalItems / cardsPerPage) - 1 : prevIndex - 1
    );
  };

  // Slice data to show exactly 4 items per page
  const visibleData = data.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  return (
    <>
      <div className={styles.containers}>
        <h1>Our popular courses</h1>
        <div className={styles.btnFx}>
          <p className={styles.describes}>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance.
          </p>
          <div className={styles.arrowButtons}>
            <button className={styles.arrowButton} onClick={handlePrev}>
              <IoIosArrowBack className={styles.arrowIcon} />
            </button>

            <button className={styles.arrowButton} onClick={handleNext}>
              <IoIosArrowForward className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>

      {/* data fetch */}
      <div className={styles.mainData}>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {visibleData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardImage}>
                <Image src={item.image} alt="course" />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.btnType}>
                  <div className={styles.cardType}>{item.type}</div>
                  <div className={styles.cardHealth}>{item.health}</div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardRating}>
                  <span>{item.rating}</span>
                  <span>({item.reviewCount})</span>
                </div>
                <div className={styles.cardTime}>
                  <span>{item.time}</span>
                  <span>{item.lessons} lessons</span>
                </div>
                <div className={styles.cardTeacher}>
                  <Image src={item.teacherImg} alt="teacher" />
                  <span>{item.teacher}</span>
                </div>
                <div className={styles.cardPrice}>
                  <span>${item.price}</span>
                  {/* <button className={styles.cardButton}>Enroll</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCourse;
