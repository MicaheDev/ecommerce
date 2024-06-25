'use client'

import Image from "next/image";
import styles from "./Slider.module.css";
import { useState } from "react";

const images = [
  {
    description: "Lady with a Teddy",
    "image-url":
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
  },
  {
    description: "Girl with camera",
    "image-url":
      "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
  },
  {
    description: "Beautiful Girl with Glasses",
    "image-url":
      "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
  },
  {
    description: "Redhead with frackles",
    "image-url":
      "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
  },
  {
    description: "Girl in black dress",
    "image-url":
      "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
  },
  {
    description: "Girl Sitting on Chair",
    "image-url":
      "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
  },
];

export default function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index: number, images: any, next = true) => {
    const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
    const nextIndex = 
    next
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
      <img className={styles.img} src={selectedImage["image-url"]} alt={selectedImage.description} />
      <button className={styles.prevBtn} onClick={previous}>back</button>
      <button className={styles.nextBtn} onClick={next}>next</button>
    </div>
  );
}
