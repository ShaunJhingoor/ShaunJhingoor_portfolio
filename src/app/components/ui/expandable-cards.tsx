"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import portfolio from "../../assets/portfolio.png"
import coming from "../../assets/coming.webp"


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
          <br />
          <br />
        </p>
      );
    },
  },
  {
    description: "Week 2",
    title: "Pantry Tracker 08/04",
    src: coming.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor",
    content: () => {
      return (
        <p>
          For week 2 of the Headstarter fellowship I will be building a pantry tracker. The pantry tracker will be built using Next.js, React.js, and Firebase. I am excited to improve my skills with React and Next, but mostly excited to learn Firebase.
          <br /> <br />
          As of right now if you click the view button you will be directed to my github so you can view my other projects. When the pantry tracker is done I will make sure to update this link.
          <br />
          <br />
        </p>
      );
    },
  },

  {
    description: "Week 3",
    title: "AI Customer Support 08/11",
    src: coming.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor",
    content: () => {
      return (
        <p>
          Week 3 is the first week of group work. We will be building out an AI customer support utilizing OpenAi, Next.js, and AWS. I am excited to learn more AWS and work with a team of talented devs.
           <br /> <br />
          As of right now if you click the view button you will be directed to my github so you can view my other projects. When the AI Customer Support is done I will make sure to update this link.
          <br />
          <br />
        </p>
      );
    },
  },
  {
    description: "Week 4",
    title: "AI Flashcards 08/18",
    src: coming.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor",
    content: () => {
      return (
        <p>
          Week 4 of the Headstarter fellowship we will be making AI Flashcards. We will be utilizing OpenAI, implementing auth, and StripeAPI. I am excited to learn and implement StripeApi for payment processing.
          <br /> <br />
          As of right now if you click the view button you will be directed to my github so you can view my other projects. When the AI Flashcards is done I will make sure to update this link.
          <br />
          <br />
        </p>
      );
    },
  },
  {
    description: "Week 5",
    title: "AI Rate My Professor 08/25",
    src: coming.src,
    ctaText: "View",
    ctaLink: "https://github.com/ShaunJhingoor",
    content: () => {
      return (
        <p>
          Week 5 we will be making an AI Rate My Professor. We will be utilizing RAG, OpenAI, and Vectors in order to make this website. I am excited to complete a RAG application.
          <br /> <br />
          As of right now if you click the view button you will be directed to my github so you can view my other projects. When the AI Rate My Professor is done I will make sure to update this link.
          <br />
          <br />
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
          <br />
          <br />
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
              className="relative w-[fit] max-w-[40rem] h-[fit] flex flex-col bg-[#2B394F] sm:rounded-3xl overflow-hidden justify-center items-center"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
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
                className="absolute top-2 right-2 flex items-center justify-center bg-[#2B394F] rounded-full h-8 w-8 border border-[#2B394F]"
                onClick={() => setActive(null)}
              >
              <CloseIcon/>
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                  layout="responsive"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-black text-white"
                  >
                    View
                  </motion.a>
                </div>
                <div className="pt-2 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
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


