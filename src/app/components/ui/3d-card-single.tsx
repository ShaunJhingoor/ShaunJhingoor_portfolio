"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import rilla from "../../assets/rilla++.png";
import { link } from "fs";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var mb-[5rem]">
      <CardBody className="bg-gray-800 text-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <div className="flex justify-center items-center h-full">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-white text-center"
          >
            Rilla++
          </CardItem>
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-lg mt-2 text-center"
        >
          As a finalist in the Headstarter Hackathon, placing in the top 3 of
          600 teams, I led the backend development for a Rilla-sponsored project
          that optimized transcript review for sales call training, boosting
          efficiency by 30%. Using AWS Lambda, DynamoDB, and API Gateway, I
          built a scalable backend for reliable CRUD operations. I also
          developed a chatbot using OpenAI and Pinecone with RAG, improving user
          interaction accuracy by 80%.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={rilla.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div id="project__stack">
          <p id="project__stack-item">DynamoDB</p>
          <p id="project__stack-item">Lambda</p>
          <p id="project__stack-item">AWS API Gateways</p>
          <p id="project__stack-item">AWS S3</p>
          <p id="project__stack-item">Pinecone</p>
          <p id="project__stack-item">OpenAI</p>
          <p id="project__stack-item">Next.JS</p>
          <p id="project__stack-item">TypeScript</p>
          <p id="project__stack-item">Tailwind</p>
          <p id="project__stack-item">Shabcn</p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://hiring-hackathon-team.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black text-white text-md font-bold transform transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
          >
            View
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
