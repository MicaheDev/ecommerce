"use client";

import Image from "next/image";
import styles from "./Slider.module.css";
import { useState } from "react";
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
  {
    description: "Girl Sitting on Chair",
    "image-url":
      "https://images.unsplash.com/photo-1719124627442-354c426e62a5?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index: number, images: any, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className={styles.slider}>
      <Image
        width={1280}
        height={720}
        className={styles.img}
        src={selectedImage["image-url"]}
        alt={selectedImage.description}
      />
      <button className={styles.prevBtn} onClick={previous}>
        <RiArrowLeftWideFill size={50} />
      </button>
      <button className={styles.nextBtn} onClick={next}>
        <RiArrowRightWideFill size={50}/>
      </button>
    </div>
  );
}
