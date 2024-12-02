"use client";

import styles from "./Customer.module.css";
import reviewImg from "../../../../public/reviews/reviewImg.png";
import Image from "next/image";
import icons from "../../../../public/reviews/Vector.png";

const data = [
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

const CustomerReview = () => {
  return (
    <div className={styles.mainContents}>
      <h2 className={styles.titles}>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
      <div className={styles.cardFx}>
        {data.map((item) => (
          <div key={item.id} className={styles.reviewCard}>
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
  );
};

export default CustomerReview;
