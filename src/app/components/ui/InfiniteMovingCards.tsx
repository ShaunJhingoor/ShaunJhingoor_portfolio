"use client";
import reactPic from "../../assets/react.png"
import React from "react";
import express from "../../assets/express.png"
import node from "../../assets/node.png"
import mongo from "../../assets/mongo.png"
import postgres from "../../assets/Postgres.png"
import typeScript from "../../assets/typescript.png"
import javascript from "../../assets/javascript.png"
import python from "../../assets/python.png"
import ruby from "../../assets/ruby.png"
import AWS from "../../assets/aws1.png"
import GCP from "../../assets/GCP1.png"
import rails from "../../assets/rails.png"
import NextJs from "../../assets/next.png"
import OpenAI from "../../assets/OpenAI.png"
import Stripe from "../../assets/Stripe.jpeg"
import Tailwind from "../../assets/Tailwind.png"
import Firestore from "../../assets/Firestore.png"
import Langchain from "../../assets/langchain.png"
import MaterialUI from "../../assets/MateralUI.png"
import Redux from "../../assets/Redux.png"
import Jupyter from "../../assets/Jupyter.png"
import Lambda from "../../assets/Lambda.png"
import Pinecone from "../../assets/Pinecone.png"
import Webpack from "../../assets/Webpack.png"
import Babel from "../../assets/Babel.png"
import Git from "../../assets/Git.png"
import JSON from "../../assets/JSON.png"
import Mongoose from "../../assets/Mongoose.png"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const items = [
    {
      src: reactPic.src,
      name: "React",
    },
    {
      src: Redux.src,
      name: "Redux",
    },
    {
      src: NextJs.src,
      name: "Next.js",
    },
    {
      src: express.src,
      name: "Express.js",
    },
    {
      src: rails.src,
      name: "Rails",
    },
    {
      src: node.src,
      name: "Node.js",
    },
    {
      src: Pinecone.src,
      name: "Pinecone",
    },
    {
      src: mongo.src,
      name: "Mongo DB",
    },
    {
      src: Mongoose.src,
      name: "Mongoose.js",
    },
    // {
    //   src: DynamoDB.src,
    //   name: "DynamoDB",
    // },
    {
      src: Lambda.src,
      name: "Lambda",
    },
    {
      src: Firestore.src,
      name: "Firestore",
    },
    // {
    //   src: Firebase.src,
    //   name: "Firebase",
    // },
    {
      src: postgres.src,
      name: "PostgresSQL",
    },
    {
      src: typeScript.src,
      name: "TypeScript",
    },
    {
      src: javascript.src,
      name: "JavaScript",
    },
    {
      src: python.src,
      name: "Python",
    },
    {
      src: ruby.src,
      name: "Ruby",
    },
    {
      src: Stripe.src,
      name: "Stripe",
    },
    {
      src: Tailwind.src,
      name: "TailWind",
    },
    {
      src: MaterialUI.src,
      name: "Material UI",
    },
    {
      src: Webpack.src,
      name: "Webpack",
    },
    {
      src: Babel.src,
      name: "Babel",
    },
    {
      src: Git.src,
      name: "Git",
    },
    {
      src: JSON.src,
      name: "JSON",
    },
    {
      src: AWS.src,
      name: "AWS",
    },
    {
      src: GCP.src,
      name: "GCP",
    },
    {
      src: OpenAI.src,
      name: "OpenAI",
    },
    {
      src: Langchain.src,
      name: "Langchain",
    },
    {
      src: Jupyter.src,
      name: "Jupyter",
    },
  ];

  return (
    <div className=" rounded-sm flex flex-col antialiased bg-[#020617] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="normal"
        
      />
    </div>
  );
}
