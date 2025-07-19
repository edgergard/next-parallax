import React from "react";
import { Anchor } from "@/enums";
import { Button } from "../ui";

const About: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section
      id={Anchor.About}
      aria-label="about-section"
      className={className}
    >
      <div className="flex flex-col gap-y-8 w-[1100px]">
        <h2
          className={`
            font-family-grotesk text-font-size-h2 font-medium leading-20
          `}
        >
          Crowdsourcing our collective intelligence to build the best AI
        </h2>

        <div className="text-font-size-p leading-8">
          <p>
            Open source AIs have been lagging in development behind OpenAI with
            billions of dollars.
          </p>
          <p>
            We run competitions between AI models to find and pay for the best
            AI model.
          </p>
          <p>Users will be able to access the best AI models.</p>
        </div>

        <Button size="small" variant="outline">
          Use the cutting edge AI
        </Button>
      </div>
    </section>
  );
};

export default About;
