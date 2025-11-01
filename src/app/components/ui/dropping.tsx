"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { cn } from "../../lib/utils";

type Props = {
  id?: string;
  className?: string;
  background?: string;
  density?: number;
  speed?: number;
  vanishYPercent?: number;
};

const FallingCore = ({
  id,
  className,
  background = "transparent",
  density = 7,
  speed = 1.0,
  vanishYPercent = 62,
}: Props) => {
  const [ready, setReady] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (!container) return;
    controls.start({ opacity: 1, transition: { duration: 0.8 } });
  };

  return (
    <motion.div animate={controls} className={cn("h-full w-full", className)}>
      {ready && (
        <Particles
          id={id || "warp-lines"}
          className="h-full w-full mix-blend-screen"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 1 },
            detectRetina: true,
            fpsLimit: 120,
            emitters: {
              position: { x: 50, y: vanishYPercent },
              size: { width: 0, height: 0 },
              rate: { delay: 0.004, quantity: density },
              life: { count: 0 },
            },
            particles: {
              number: { value: 0 },
              shape: { type: "circle" },
              size: { value: { min: 0.5, max: 1 } },
              opacity: { value: 1 },
              color: {
                value: [
                  "#ff4df3", // pink
                  "#8affff", // cyan
                  "#9bb2ff", // blue
                  "#b28aff", // violet
                  "#a8ff91", // green
                  "#ffcc80", // orange
                  "#ffffff", // white core
                ],
                animation: {
                  h: {
                    enable: true,
                    speed: 10, // hue cycling speed
                    sync: false,
                  },
                },
              },
              move: {
                enable: true,
                straight: true,
                direction: "none",
                center: { x: 50, y: vanishYPercent, mode: "percent" },
                speed: { min: 120 * speed, max: 220 * speed },
                outModes: { default: "destroy" },
              },
              trail: {
                enable: true,
                length: 90,
                fill: { color: "rgba(0,0,0,0.35)" },
              },
              links: { enable: false },
              collisions: { enable: false },
            },
          }}
        />
      )}
    </motion.div>
  );
};

export default FallingCore;
