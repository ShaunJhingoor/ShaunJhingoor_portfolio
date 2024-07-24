"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css'; 
import reading from "../../assets/reading.png"
import hiking from "../../assets/Hiking.png"
import car from "../../assets/cars.png"

interface CarouselItem {
  imgSrc: string;
  alt: string;
  title: string;
  description: React.ReactNode;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const items: CarouselItem[] = [
    {
      imgSrc: reading.src,
      alt: 'reading',
      title: 'Reading',
      description: (
        <>
          I love diving into a good book. I am currently reading "You Shouldn't Have Come Here" by Jeneva Rose. Happy to talk about a good book anytime. My{' '}
          <a
            href="https://github.com/ShaunJhingoor"
            aria-label="github"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
          </a>{' '}
          contains a list of a few of my favorite books.
        </>
      ),
    },
    {
      imgSrc: hiking.src,
      alt: 'hiking',
      title: 'Hiking',
      description: (
        <>
          I love getting out into nature and exploring new trails. Whenever I get stuck on a coding problem, getting outside and getting some sun is a great reboot for my mind. Check out{' '}
          <a
            href="https://alladventure.onrender.com/"
            aria-label="adventure"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            All Adventure
          </a>{' '}
          to see some great trails!
        </>
      ),
    },
    {
      imgSrc: car.src,
      alt: 'cars',
      title: 'Working on cars',
      description: (
        <>
          I love diving into new puzzles and putting them together. Coding makes sense since I have been troubleshooting cars most of my life. Like coding, working on cars is another puzzle I love.
        </>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section id="hobbies">
      <h2 className={styles.sectionTitle}>Hobbies</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <Image src={item.imgSrc} alt={item.alt} width={60} height={60} id={styles.imageHobbies}/>
              <br />
              <h3 id={styles.hobbiesTitle}>{item.title}</h3>
              <p id={styles.hobbiesdescription}>{item.description}</p>
            </div>
          ))}
        </div>
        <button className={`${styles.carouselControl} ${styles.prev}`} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={`${styles.carouselControl} ${styles.next}`} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
