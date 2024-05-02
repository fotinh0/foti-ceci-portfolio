import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Navbar from "./Navbar";

const COLORS_TOP = ["#1E67C6", "#4D00FF"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <Navbar />
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-lg mb-4 leading-8 text-indigo-400 font-bold">
          Hi, my name is
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Foti Ceci
        </h2>
        <h1 className="animate-bounce bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          I like to code all web things.
        </h1>
        <p className="my-6 max-w-4xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          I&apos;m a software developer specializing in crafting dynamic web
          applications with a strong foundation in full-stack development.
          Currently, I&apos;m immersed in the exciting challenge of creating
          impactful and scalable solutions for{" "}
          <a
            className="cursor-pointer font-bold text-indigo-400 hover:underline"
            href="https://www.ibm.com/training"
          >
            IBM
          </a>
          .
        </p>
        <motion.button
          onClick={() => {
            document
              .getElementById("experience")
              .scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Learn more
          <FiArrowRight className="transition-transform group-hover:rotate-90 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}
