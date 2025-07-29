"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Anchor } from "@/enums";
import { scrollToAnchor } from "@/utils";
import { Button } from "../ui";

interface HeroSectionBadge {
  id: number;
  count: string;
  label: string;
}

const badges: HeroSectionBadge[] = [
  {
    id: 0,
    count: "10,873",
    label: "LLM models",
  },
  {
    id: 1,
    count: "$72,470,728",
    label: "Paid to data scientists",
  },
  {
    id: 2,
    count: "6,557",
    label: "Members",
  },
];

const gradientClassname = `
  bg-linear-150 from-10% via-40% to-70% 
  from-h1-gradient-start via-h1-gradient-via to-h1-gradient-to
`;

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  const handlePageClick = (): void => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 200);
  };

  return (
    <section
      aria-label="hero-section"
      className={twMerge("pt-8", className)}
      id={Anchor.Hero}
      onClick={handlePageClick}
    >
      <div className="flex justify-center gap-x-4 pb-[100px]">
        <Button
          active={isActive}
          size="small"
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            scrollToAnchor(Anchor.Leaderboard);
          }}
        >
          LLM Leaderboard
        </Button>
        <Button
          size="small"
          variant="outline"
          onClick={(e) => e.stopPropagation()}
        >
          Buy Spice AI
        </Button>
      </div>

      <div className="flex flex-col gap-y-9 pb-[100px]">
        <h1
          className={`
            font-family-grotesk text-font-size-h1
            font-medium max-w-[1629px] text-transparent bg-clip-text
            ${gradientClassname}
          `}
        >
          A new economic primitive for funding decentralized AI
        </h1>

        <p className="text-font-size-p">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>

        <div className="flex gap-x-8">
          <Button
            size="small"
            variant="outline"
            onClick={(e) => e.stopPropagation()}
          >
            Buy Spice AI
          </Button>
          <Button
            active={isActive}
            size="small"
            variant="text"
            onClick={(e) => e.stopPropagation()}
          >
            Try now
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-x-[34px]">
        {badges.map(({ id, count, label }) => (
          <div className="relative w-[564px] h-[192px]" key={id}>
            <div
              className={`
                absolute inset-0  rounded-full opacity-15 ${gradientClassname}
            `}
            />
            <div
              className={`
                absolute inset-0 flex flex-col items-center justify-center 
                gap-y-5
              `}
            >
              <span
                className={`
                font-family-grotesk text-font-size-h2 font-semibold opacity-100
              `}
              >
                {count}
              </span>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
