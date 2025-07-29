"use client";

import Image from "next/image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import RocketImage from "@/assets/images/rocket-image.png";
import { Anchor } from "@/enums";
import { useLeaderboard } from "@/hooks";
import { LeaderboardTable } from "../containers";
import { Button } from "../ui";

const Leaderboard: React.FC<{ className?: string }> = ({ className }) => {
  const { isLeaderboardExpanded } = useLeaderboard();
  const { ref } = useParallax<HTMLDivElement>({
    translateY: [300, isLeaderboardExpanded ? -1200 : -600],
  });

  return (
    <section
      aria-label="leaderboard-section"
      className={className}
      id={Anchor.Leaderboard}
    >
      <div className="relative flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h3 className="font-family-grotesk text-font-size-h3">
            LLM Leaderboard
          </h3>

          <Button size="small" variant="outline">
            Submit your model
          </Button>
        </div>

        <p className="text-font-size-p-small leading-8">
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework
          to test LLMs on a large number of different evaluation tasks. The
          higher the score, the better the LLM.
        </p>

        <div className="relative h-full w-full">
          <LeaderboardTable />

          <div className="absolute bottom-0 left-1/5" ref={ref}>
            <Image alt="rocket-image" src={RocketImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
