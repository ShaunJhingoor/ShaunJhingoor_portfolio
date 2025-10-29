"use client";
import NavBar from "./components/ui/navbar-menu";
import SparklesCore from "./components/ui/Sparkles";
import { LampDemo } from "./components/ui/lamp";
import { useState } from "react";
import { useEffect } from "react";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import { FlipWords } from "./components/ui/flip-word";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import cell from "./assets/cellExplorer.png";
import allAdventure from "./assets/allAdventure.png";
import teamMates from "./assets/teamMates.png";
import "./page.css";
import { InfiniteMovingCardsDemo } from "./components/ui/InfiniteMovingCards";
import { ExpandableCardDemo } from "./components/ui/expandable-cards";
import Carousel from "./components/ui/hobbies-carousel";
import { ThreeDCardDemo } from "./components/ui/3d-card-single";
import { SkillsModal } from "./components/ui/skills-modal";
import express from "./assets/express.png";
import node from "./assets/node.png";
import mongo from "./assets/mongo.png";
import postgres from "./assets/Postgres.png";
import typeScript from "./assets/typescript.png";
import javascript from "./assets/javascript.png";
import python from "./assets/python.png";
import ruby from "./assets/ruby.png";
import AWS from "./assets/aws1.png";
import GCP from "./assets/GCP1.png";
import rails from "./assets/rails.png";
import NextJs from "./assets/next.png";
import OpenAI from "./assets/OpenAI.png";
import Stripe from "./assets/Stripe.jpeg";
import Tailwind from "./assets/Tailwind.png";
import Firestore from "./assets/Firestore.png";
import Langchain from "./assets/langchain.png";
import MaterialUI from "./assets/MateralUI.png";
import Redux from "./assets/Redux.png";
import Jupyter from "./assets/Jupyter.png";
import Lambda from "./assets/Lambda.png";
import Pinecone from "./assets/Pinecone.png";
import Webpack from "./assets/Webpack.png";
import Babel from "./assets/Babel.png";
import Git from "./assets/Git.png";
import JSON from "./assets/JSON.png";
import Mongoose from "./assets/Mongoose.png";
import DynamoDB from "./assets/dbd1.png";
import Firebase from "./assets/fb1.png";
import convex from "./assets/convex.png";
import pinata from "./assets/pinata.png";
import viem from "./assets/viem.png";
import fastapi from "./assets/fastapi.png";
import sqlAlchemy from "./assets/sqlAlchemy.png";
import reactPic from "./assets/react.png";

const Popup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <SparklesCore
        background="#000000"
        particleDensity={50}
        minSize={1}
        maxSize={3}
        speed={5}
      />
      <div className="absolute flex items-center justify-center inset-0">
        <div className="text-center">
          <FlipWords
            words={["Welcome!"]}
            duration={1000}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const skills: { name: string; level?: string }[] = [
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Redux", level: "Intermediate" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Firebase/Firestore", level: "Intermediate" },
  { name: "Pinecone (RAG)", level: "Intermediate" },
  { name: "OpenAI APIs", level: "Advanced" },
  { name: "AWS (Lambda, API GW)", level: "Intermediate" },
];
export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        console.log(element);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 3100);
    }
  }, []);

  // types (optional, but nice)
  type Skill = { name: string; src: string; level?: string };
  type SkillCategory = { title: string; skills: Skill[] };

  // centralized icon map (easy to reuse anywhere)
  const ICON: Record<string, string> = {
    React: reactPic.src,
    "Next.js": NextJs.src,
    "Tailwind CSS": Tailwind.src,
    "Material UI": MaterialUI.src,
    Redux: Redux.src,

    TypeScript: typeScript.src,
    JavaScript: javascript.src,
    Python: python.src,
    Ruby: ruby.src,

    "Node.js": node.src,
    "Express.js": express.src,
    FastAPI: fastapi.src,
    Rails: rails.src,

    PostgreSQL: postgres.src,
    MongoDB: mongo.src,
    Mongoose: Mongoose.src,
    DynamoDB: DynamoDB.src,
    Firebase: Firebase.src,
    Firestore: Firestore.src,
    Convex: convex.src,
    SQLAlchemy: sqlAlchemy.src,

    OpenAI: OpenAI.src,
    LangChain: Langchain.src,
    Pinecone: Pinecone.src,
    Jupyter: Jupyter.src,

    AWS: AWS.src,
    "Google Cloud (GCP)": GCP.src,
    "AWS Lambda": Lambda.src,
    Git: Git.src,
    Webpack: Webpack.src,
    Babel: Babel.src,
    JSON: JSON.src,

    Stripe: Stripe.src,
    Pinata: pinata.src,
    Viem: viem.src,
  };

  // final categories
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React", src: ICON["React"] },
        { name: "Next.js", src: ICON["Next.js"] },
        { name: "Tailwind CSS", src: ICON["Tailwind CSS"] },
        { name: "Material UI", src: ICON["Material UI"] },
        { name: "Redux", src: ICON["Redux"] },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", src: ICON["TypeScript"] },
        { name: "JavaScript", src: ICON["JavaScript"] },
        { name: "Python", src: ICON["Python"] },
        { name: "Ruby", src: ICON["Ruby"] },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", src: ICON["Node.js"] },
        { name: "Express.js", src: ICON["Express.js"] },
        { name: "FastAPI", src: ICON["FastAPI"] },
        { name: "Rails", src: ICON["Rails"] },
      ],
    },
    {
      title: "Databases & Data Layer",
      skills: [
        { name: "PostgreSQL", src: ICON["PostgreSQL"] },
        { name: "MongoDB", src: ICON["MongoDB"] },
        { name: "Mongoose", src: ICON["Mongoose"] },
        { name: "DynamoDB", src: ICON["DynamoDB"] },
        { name: "Firebase", src: ICON["Firebase"] },
        { name: "Firestore", src: ICON["Firestore"] },
        { name: "Convex", src: ICON["Convex"] },
        { name: "SQLAlchemy", src: ICON["SQLAlchemy"] },
      ],
    },
    {
      title: "AI & Data",
      skills: [
        { name: "OpenAI", src: ICON["OpenAI"] },
        { name: "LangChain", src: ICON["LangChain"] },
        { name: "Pinecone", src: ICON["Pinecone"] },
        { name: "Jupyter", src: ICON["Jupyter"] },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", src: ICON["AWS"] },
        { name: "Google Cloud (GCP)", src: ICON["Google Cloud (GCP)"] },
        { name: "AWS Lambda", src: ICON["AWS Lambda"] },
        { name: "Git", src: ICON["Git"] },
        { name: "Webpack", src: ICON["Webpack"] },
        { name: "Babel", src: ICON["Babel"] },
        { name: "JSON", src: ICON["JSON"] },
      ],
    },
    {
      title: "Web3 & Commerce",
      skills: [
        { name: "Viem", src: ICON["Viem"] },
        { name: "Pinata", src: ICON["Pinata"] },
        { name: "Stripe", src: ICON["Stripe"] },
      ],
    },
  ];

  return (
    <main className="section main bg-[#020617]">
      {showPopup ? (
        <Popup />
      ) : (
        <div className="section main bg-[#020617]">
          <NavBar />
          <section id="about">
            <LampDemo />
          </section>
          <section
            id="skills"
            className="section skills bg-[#020617] h-[20rem] "
          >
            <button
              onClick={() => setOpen(true)}
              className="mx-auto block text-center"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="skills-modal"
            >
              <h2 className="section__title text-4xl md:text-5xl font-bold mb-8 text-center text-white pb-4 drop-shadow-lg hover:text-white/90 transition">
                Skills
              </h2>
            </button>
            <SkillsModal
              open={open}
              onClose={() => setOpen(false)}
              categories={categories}
            />

            <InfiniteMovingCardsDemo />
          </section>
          <section
            id="headstarter"
            className="section headstarter bg-[#020617] mb-[10rem] mt-[5rem]"
          >
            <h2 className="section__title text-4xl mb-[5vh] md:text-5xl font-bold  text-center text-white pb-4 drop-shadow-lg">
              Headstarter.ai Fellowship
            </h2>
            <ExpandableCardDemo />
          </section>

          <section id="projects" className="section projects bg-[#020617]">
            <h2 className="section__title text-4xl md:text-5xl font-bold mb-8 text-center text-white pb-4 drop-shadow-lg">
              Projects
            </h2>

            <div className="projects__grid">
              <CardContainer containerClassName="mt-10">
                <CardBody className="project">
                  <CardItem
                    className="bg-gray-800 text-white p-10 text-center"
                    id="projectdetail"
                    translateX={0}
                    translateY={0}
                    translateZ={150}
                    rotateX={0}
                    rotateY={0}
                  >
                    <div className="relative w-full h-48">
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                          src={cell}
                          alt="A description of the image"
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 ease-out transform hover:scale-120"
                        />
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                      Cell Explorer
                    </h2>
                    <p className="mt-2">
                      Cell Explorer is an interactive demo where users compare
                      Eukaryotic and Prokaryotic cells. Organelles, the cell
                      components, can be clicked on for information. Links below
                      to view github repository and live site.
                    </p>
                    <div id="project__stack">
                      <p id="project__stack-item">Canvas</p>
                      <p id="project__stack-item">JavaScript</p>
                      <p id="project__stack-item">CSS</p>
                      <p id="project__stack-item">HTML</p>
                    </div>
                    <div className="icon-container">
                      <a
                        href="https://github.com/ShaunJhingoor/JSproject"
                        aria-label="source code"
                        className="link link--icon mt-4"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://shaunjhingoor.github.io/JSproject/"
                        aria-label="live preview"
                        className="link link--icon mt-2"
                        target="_blank"
                      >
                        <i
                          aria-hidden="true"
                          className="fas fa-external-link-alt"
                        ></i>
                      </a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer containerClassName="mt-10">
                <CardBody className="project">
                  <CardItem
                    className="bg-gray-800 text-white p-10 text-center"
                    id="projectdetail"
                    translateX={0}
                    translateY={0}
                    translateZ={150}
                    rotateX={0}
                    rotateY={0}
                  >
                    <div className="relative w-full h-48">
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                          src={allAdventure}
                          alt="A description of the image"
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 ease-out transform hover:scale-110"
                        />
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                      All Adventure
                    </h2>
                    <p className="mt-2">
                      All Adventure is a full stack application modeled off All
                      Trails. Users are able to view trails all throughout New
                      York on a interactive Google Map and zoom in on the trail
                      of interest. Users can view and write reviews and ratings
                      for a trail. Links below to view github repository and
                      live site.
                    </p>
                    <div id="project__stack">
                      <p id="project__stack-item">PostgreSQL</p>
                      <p id="project__stack-item">Rails</p>
                      <p id="project__stack-item">React</p>
                      <p id="project__stack-item">Redux</p>
                      <p id="project__stack-item">AWS S3</p>
                      <p id="project__stack-item">Google Api</p>
                      <p id="project__stack-item">JavaScript</p>
                      <p id="project__stack-item">Ruby</p>
                      <p id="project__stack-item">CSS</p>
                      <p id="project__stack-item">HTML</p>
                    </div>
                    <div className="icon-container">
                      <a
                        href="https://github.com/ShaunJhingoor/AllAdventure"
                        aria-label="source code"
                        className="link link--icon mt-4"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://alladventure.onrender.com/"
                        aria-label="live preview"
                        className="link link--icon mt-2"
                        target="_blank"
                      >
                        <i
                          aria-hidden="true"
                          className="fas fa-external-link-alt"
                        ></i>
                      </a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer containerClassName="mt-10">
                <CardBody className="project">
                  <CardItem
                    className="bg-gray-800 text-white p-10 text-center"
                    id="projectdetail"
                    translateX={0}
                    translateY={0}
                    translateZ={150}
                    rotateX={0}
                    rotateY={0}
                  >
                    <div className="relative w-full h-48">
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                          src={teamMates}
                          alt="A description of the image"
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 ease-out transform hover:scale-110"
                        />
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-4">Team Mates</h2>
                    <p className="mt-2">
                      Team Mates is a full stack application incorporating
                      Google Maps. Completed in a team of four. Users can find
                      or create sporting events by location, and filter by sport
                      category, difficulty, and distance. Profiles can be
                      created to indicate attendance and add friends. Links
                      below to view github repository and live site.
                    </p>
                    <div id="project__stack">
                      <p id="project__stack-item">Mongo DB</p>
                      <p id="project__stack-item">Mongoose.js</p>
                      <p id="project__stack-item">Express</p>
                      <p id="project__stack-item">React</p>
                      <p id="project__stack-item">Redux</p>
                      <p id="project__stack-item">Node.js</p>
                      <p id="project__stack-item">React</p>
                      <p id="project__stack-item">JavaScript</p>
                      <p id="project__stack-item">AWS S3</p>
                      <p id="project__stack-item">Google Api</p>
                      <p id="project__stack-item">CSS</p>
                      <p id="project__stack-item">HTML</p>
                    </div>
                    <div className="icon-container">
                      <a
                        href="https://github.com/erklee/TeamMates"
                        aria-label="source code"
                        className="link link--icon mt-4"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://teammates.onrender.com/"
                        aria-label="live preview"
                        className="link link--icon mt-2"
                        target="_blank"
                      >
                        <i
                          aria-hidden="true"
                          className="fas fa-external-link-alt"
                        ></i>
                      </a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>
          <section id="hackathon">
            <h2 className="section__title text-4xl md:text-5xl font-bold mb-8 text-center text-white pb-4 drop-shadow-lg">
              Hackathon
            </h2>
            <ThreeDCardDemo />
          </section>
          <section>
            <Carousel />
          </section>
          <section
            id="contact"
            className="section contact bg-[#020617] h-[12rem] mt-[4rem]"
          >
            <h2 className="section__title text-4xl md:text-5xl font-bold mb-8 text-center text-white pb-4 drop-shadow-lg">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6 ">
              <a
                href="tel:{516-361-5945}"
                className="text-white text-4xl hover:text-gray-300"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="https://github.com/ShaunJhingoor"
                className="text-white text-4xl hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shaun-jhingoor-10a50328a/"
                className="text-white text-4xl hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:Jhingoor1945@gmail.com"
                className="text-white text-4xl hover:text-gray-300"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
