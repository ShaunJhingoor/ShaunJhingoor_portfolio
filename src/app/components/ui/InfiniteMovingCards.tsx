"use client";
import reactPic from "../../assets/react.png"
import React from "react";
import express from "../../assets/express.png"
import node from "../../assets/node.png"
import mongo from "../../assets/mongo.png"
import postgres from "../../assets/Postgres.png"
import typeScript from "../../assets/typescript.png"
import javascript from "../../assets/javasscript.png"
import python from "../../assets/python.png"
import ruby from "../../assets/ruby.png"
import AWS from "../../assets/aws.png"
import rails from "../../assets/rails.png"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const items = [
    {
      src: reactPic.src,
      name: "React",
    },
    {
      src: express.src,
      name: "Express.js",
    },
    {
      src: node.src,
      name: "Node.js",
    },
    {
      src: mongo.src,
      name: "Mongo DB",
    },
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
      src: rails.src,
      name: "Rails",
    },
    {
      src: ruby.src,
      name: "Ruby",
    },
    {
      src: AWS.src,
      name: "AWS",
    },
  ];

  return (
    <div className=" rounded-sm flex flex-col antialiased bg-[#020617] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
        
      />
    </div>
  );
}
