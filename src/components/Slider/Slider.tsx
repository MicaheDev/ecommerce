"use client";

import Image from "next/image";
import styles from "./Slider.module.css";
import { useEffect, useRef, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const images = [
  {
    description: "Lady with a Teddy",
    "image-url":
      "https://images.unsplash.com/photo-1719293812273-bdb5ddd56dd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Girl with camera",
    "image-url":
      "https://images.unsplash.com/photo-1719244698547-b3e6ed8ffe72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Beautiful Girl with Glasses",
    "image-url":
      "https://images.unsplash.com/photo-1719293624624-d00ad3afb961?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Redhead with frackles",
    "image-url":
      "https://images.unsplash.com/photo-1719273659346-feb0ae0c38fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Girl in black dress",
    "image-url":
      "https://images.unsplash.com/photo-1719124627442-354c426e62a5?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Slider() {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [widthImg, setWidthImg] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const container: HTMLDivElement = sliderRef.current;
      setWidthImg(100 / container.children.length);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveToRight();
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [widthImg]);

  const moveToLeft = () => {
    setPosition((prev) => (prev === 0 ? 100 - widthImg : prev - widthImg));
  };

  const moveToRight = () => {
    setPosition((prev) => (prev === 100 - widthImg ? 0 : prev + widthImg));
  };

  useEffect(() => {
    if (sliderRef.current) {
      const container: HTMLDivElement = sliderRef.current;
      container.style.transform = `translateX(-${position}%)`;
    }
  }, [position]);
  
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
      <div className={styles.sliders} ref={sliderRef}>
        {images.map((image) => (
          <section className={styles.sliderSection} key={image.description}>
            <Image
              width={1280}
              height={720}
              priority={true}
              src={image["image-url"]}
              alt={image.description}
            />
          </section>
        ))}
      </div>
      <button onClick={moveToLeft} className={styles.prevBtn}>
        <RiArrowLeftWideFill size={40} />
      </button>
      <button onClick={moveToRight} className={styles.nextBtn}>
        <RiArrowRightWideFill size={40} />
      </button>
    </div>
    </div>
  );
}
