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

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

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
            <h2 className="section__title text-4xl md:text-5xl font-bold mb-8 text-center text-white pb-4 drop-shadow-lg">
              Skills
            </h2>
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
