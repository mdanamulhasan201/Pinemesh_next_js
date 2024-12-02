"use client";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import styles from "./Popular.module.css";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdHeartEmpty,
} from "react-icons/io";
import bannerImg1 from "../../../../public/popular_course/image_1.png";
import bannerImg2 from "../../../../public/popular_course/image_2.png";
import bannerImg3 from "../../../../public/popular_course/image_3.png";
import bannerImg4 from "../../../../public/popular_course/image_4.png";
import teacherImg1 from "../../../../public/popular_course/teacher/image_1.png";
import teacherImg2 from "../../../../public/popular_course/teacher/image_2.png";
import teacherImg3 from "../../../../public/popular_course/teacher/image_3.png";
import teacherImg4 from "../../../../public/popular_course/teacher/image_4.png";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { MdCheckCircle, MdTimer } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={styles.stars}>
      {Array(fullStars)
        .fill(<FaStar className={styles.starFull} />)
        .map((star, index) => (
          <div key={`full-${index}`}>{star}</div>
        ))}
      {Array(halfStars)
        .fill(<FaStarHalfAlt className={styles.starHalf} />)
        .map((star, index) => (
          <div key={`half-${index}`}>{star}</div>
        ))}
      {Array(emptyStars)
        .fill(<FaStar className={styles.starEmpty} />)
        .map((star, index) => (
          <div key={`empty-${index}`}>{star}</div>
        ))}
    </div>
  );
};

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
    title: "Introduction to Healthy Diet and Nutrition",
    rating: 3.9,
    reviewCount: 566,
    time: "6h 34m",
    lessons: 3,
    teacher: "Kate Winslate",
    teacherImg: teacherImg4,
    price: 100,
  },
];

const PopularCourse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerSlide(4);
      else if (width >= 768) setItemsPerSlide(3);
      else setItemsPerSlide(1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalItems = data.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalItems ? 0 : prevIndex + 1
    );
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  }, [totalItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const handleAddToCart = (id) => {
    console.log("Add to cart", id);
    alert("Added to cart", id);
  };

  const handleAddFvt = (id) => {
    console.log("Add to favorite", id);
    alert("Added to favorite", id);
  };

  return (
    <>
      <div className={styles.containers}>
        <h1>Our Popular Courses</h1>
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
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardImage}>
                <Image src={item.image} alt="course" />
                <div className={styles.cardIcons}>
                  <div className={styles.cardIcon}>
                    <BsCart2 onClick={() => handleAddToCart(item.id)} />
                  </div>
                  <div className={styles.cardIcon}>
                    <IoMdHeartEmpty onClick={() => handleAddFvt(item.id)} />
                  </div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.btnType}>
                  <div className={styles.cardType}>{item.type}</div>
                  <div className={styles.cardHealth}>{item.health}</div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardRating}>
                  <RatingStars rating={item.rating} />
                  <span>{item.rating}</span>
                  <span>({item.reviewCount})</span>
                </div>
                <div className={styles.cardTime}>
                  <div className={styles.timesIco}>
                    <MdTimer className={styles.iconsSt} />
                    <span className={styles.titless}>{item.time}</span>
                  </div>
                  <div className={styles.linesH}></div>
                  <div className={styles.lessonsIcon}>
                    <PiBookOpenTextBold className={styles.iconsSt} />
                    <span className={styles.titless}>
                      {item.lessons} lessons
                    </span>
                  </div>
                </div>
                <div className={styles.footerCrd}>
                  <div className={styles.cardTeacher}>
                    <Image src={item.teacherImg} alt="teacher" />
                    <span className={styles.teName}>{item.teacher}</span>
                  </div>
                  <div className={styles.cardPrice}>
                    <span>{item.price}$</span>
                  </div>
                  {item.payment === "done" && (
                    <div className={styles.paymentDone}>
                      <MdCheckCircle />
                    </div>
                  )}
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
