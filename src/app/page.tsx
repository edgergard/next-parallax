"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import PlanetImage from "@/assets/images/planet-image.png";
import {
  About,
  Carousel,
  Footer,
  Hero,
  Leaderboard,
} from "@/components/sections";

const Home: React.FC = () => {
  const imageParallax = useParallax<HTMLDivElement>({
    translateY: [-1500, 1800],
  });

  return (
    <main className="relative bg-black text-white">
      <div ref={imageParallax.ref} className="absolute top-0 right-0 z-0">
        <Image
          alt="planet-image"
          src={PlanetImage}
          width={1016}
          height={1016}
        />
      </div>

      <div className="relative z-10" aria-label="sections">
        <Hero className="pb-[300px] px-page-x" />
        <About className="pt-[100px] pb-[300px] px-page-x" />
        <div className="h-100">
          <Carousel className="pt-[100px] pb-[300px]" />
        </div>

        <Leaderboard className="pt-[100px] pb-[500px] px-page-x" />
      </div>

      <Footer className="pb-[112px]" />
    </main>
  );
};

export default Home;
