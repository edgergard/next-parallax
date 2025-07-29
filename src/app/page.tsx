"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlanetImage from "@/assets/images/planet-image.png";
import {
  About,
  Carousel,
  Footer,
  Hero,
  Leaderboard,
} from "@/components/sections";
import { useScroll, useTransform, motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col relative bg-black text-white">
      <div className="z-10" aria-label="sections">
        <BackgroundImage />
        <Hero className=" pb-[300px] px-page-x" />
        <About className="pt-[100px] pb-[300px] px-page-x" />
        <div className="h-100">
          <Carousel className="pt-[100px] pb-[300px]" />
        </div>
      </div>

      <Leaderboard className="pt-[100px] pb-[500px] px-page-x" />
      <Footer className="pb-[112px] mt-auto" />
    </main>
  );
};

export default Home;

const BackgroundImage = () => {
  const imageParallax = useParallax<HTMLDivElement>({ speed: -5 });
  const { scrollY } = useScroll();

  return (
    <div
      ref={imageParallax.ref}
      className="sticky top-0 right-0 z-0 ml-auto"
      style={{

        backgroundImage: `url(${PlanetImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "1016px",
        height: "1016px",
      }}
    />
  );
};
