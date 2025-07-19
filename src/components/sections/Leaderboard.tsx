"use client";

import React from "react";
import { Anchor } from "@/enums";
import { LeaderboardTable } from "../containers";
import { Button } from "../ui";

const Leaderboard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section
      aria-label="leaderboard-section"
      className={className}
      id={Anchor.Leaderboard}
    >
      <div className="flex flex-col gap-y-8">
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

        <LeaderboardTable />
      </div>
    </section>
  );
};

export default Leaderboard;
