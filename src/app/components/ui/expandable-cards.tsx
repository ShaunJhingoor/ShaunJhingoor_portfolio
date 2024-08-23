"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import portfolio from "../../assets/portfolio.png"
import coming from "../../assets/coming.webp"
import pantryTracker from "../../assets/pantryTracker.png"
import reactHelper from "../../assets/reactHelper.png"
import AIflashworld from "../../assets/AI-Flashworld.png"
import AIRateMyProfessor from "../../assets/AI-Rate-My-Professor.png"


export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Week 1",
    title: "Portfolio",
    src: portfolio.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor/ShaunJhingoor_portfolio",
    content: () => {
      return (
        <p>
          You are currently viewing my Headstarter fellowship project for week 1. I built this portfolio using Next.js, TypeScript, Tailwind CSS, and Vercel for hosting. I have never used this stack before, but wanted to challenge myself. <br /> <br /> I hope you enjoyed my portfolio. If you click the view button you will taken to my github repo for this project.
        </p>
      );
    },
  },
  {
    description: "Week 2",
    title: "Pantry Tracker",
    src: pantryTracker.src,
    ctaText: "View",
    ctaLink: "https://pantry-tracker-ten.vercel.app/",
    content: () => {
      return (
        <p>
          The Headstarter fellowship project for week 2 involved building a pantry tracker. This application was created using React-Vite, Redux Toolkit, OpenAI API, and Firebase/Firestore. Pantry Tracker features CRUD operations for pantry items and includes image recognition via OpenAI. It also offers full user authentication and Google sign-in/sign-up. 
          <br /> <br />
          If you click the view button you will be directed to the live site of Pantry Tracker.
        </p>
      );
    },
  },

  {
    description: "Week 3",
    title: "React Helper",
    src: reactHelper.src,
    ctaText: "View",
    ctaLink: "https://chat-bot-one-delta.vercel.app/",
    content: () => {
      return (
        <p>
          In Week 3 of the Headstarter fellowship, our team of four built a Chatbot using Next.js, Material UI, Tailwind CSS, Pinecone, and the OpenAI API. The result, React Helper, is a RAG (Retrieval-Augmented Generation) Chatbot trained using data from web-scraped React documentation. It also includes user authentication.
          <br /> <br />
          If you click the view button you will be directed to the live site of React Helper.
        </p>
      );
    },
  },
  {
    description: "Week 4",
    title: "AI FlashWorld",
    src: AIflashworld.src,
    ctaText: "View",
    ctaLink: "https://ai-flash-word.vercel.app/",
    content: () => {
      return (
        <p>
          In Week 4 of the Headstarter fellowship we were tasked with making an AI flash card website. AI FlashWord was built in a team of four utilizing Stripe API, Open AI, Firebase Firestore, and NextJS. Users can generate AI-generated flashcards for topics of their choice or an uploaded PDF. Premium users can generate and study larger decks, generate quizzes, and have access to an unlimited number of decks.
          <br /> <br />
          If you click the view button you will be directed to the live site of AI FlashWorld.
        </p>
      );
    },
  },
  {
    description: "Week 5",
    title: "AI Rate My Professor",
    src: AIRateMyProfessor.src,
    ctaText: "View",
    ctaLink: "https://ai-rate-my-professor-delta.vercel.app/",
    content: () => {
      return (
        <p>
          In Week 5 of the Headstarter Fellowship, our team of four developed AI Rate My Professor, a pioneering AI-driven platform designed to enhance the way students evaluate professors. By harnessing the power of OpenAI, Pinecone, Material UI, Jupyter Notebook, and Next.js, we built a site that allows users to access and retrieve precise information from Rate My Professor. This Retrieval-Augmented Generation (RAG) application streamlines the search process, offering tailored insights to assist in crafting the perfect class schedule
          <br /> <br />
          If you click the view button you will be directed to the live site of AI Rate My Professor.
        </p>
      );
    },
  },
  {
    description: "Week 6 - 7",
    title: "Ship to 1000 users 09/08",
    src: coming.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor",
    content: () => {
      return (
        <p>
          Week 6-7 our goal will be to make an application that has 1000 users, 1000 people on a waitlist, or 1000 dollars in revenue. In week 7 we will be presenting this project to other engineers.
          <br /> <br />
          As of right now if you click the view button you will be directed to my github so you can view my other projects. When the final project is done I will make sure to update this link.
        </p>
      );
    },
  },
];

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="relative w-full max-w-4xl h-auto bg-[#2B394F] rounded-3xl overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 flex items-center justify-center bg-[#2B394F] rounded-full h-8 w-8 border border-[#2B394F] z-20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
        
            <motion.div
              layoutId={`image-${active.title}-${id}`}
              className="relative w-full h-80 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${active.src})`,
                backgroundSize: 'contain', // Ensures the whole image is visible
              }}
            >
        
            </motion.div>

            {/* Text Content Section */}
            <div className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-white">
                    {active.title}
                  </motion.h3>
                  <motion.p layoutId={`description-${active.description}-${id}`} className="text-white">
                    {active.description}
                  </motion.p>
                </div>
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-black text-white mt-4 md:mt-0"
                >
                  View
                </motion.a>
              </div>

              <div className="pt-2">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-xs md:text-sm lg:text-base max-h-40 md:max-h-fit pb-10 flex flex-col items-start gap-4 overflow-auto"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>        
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 bg-gray-900">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col items-center  md:flex-row md:justify-between md:items-start hover:bg-[#003366] dark:hover:bg-[#003366] rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-black text-white mt-4 md:mt-0"
            >
              View
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}


