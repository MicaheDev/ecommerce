"use client";

import Image from "next/image";
import styles from "./Slider.module.css";
import { useEffect, useRef, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const images = [
  {
    description: "woman model",
    "image-url":
      "https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/b5a4a5b1-ee6b-4f23-9c54-d8562c30fe95___f873fff3a05a5c44bbd78b90591b3981.webp",
  },
  {
    description: "man model",
    "image-url":
      "https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/5ac25d9e-136b-4bd7-a711-e5fb1d9a2556___326cb97021bdc4c4b9afde68b718df5d.webp",
  },
  {
    description: "babys smiling",
    "image-url":
      "https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/ce361177-6663-4065-bd8b-817b772e505c___51d9258fb9182de7d2e0437bd337fb08.webp",
  },
  {
    description: "kid",
    "image-url":
      "https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/91870a4b-bac6-4d5b-8eaa-c9bbd61fbab6___8108cf8537163ed61e57523e09dc8b2f.webp",
  },
  {
    description: "sport",
    "image-url":
      "https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/c9af9dfb-9878-4fff-9ce9-c2868dbb198e___5adf8dae33d1b83d4cfae8e4107fea5d.webp",
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
