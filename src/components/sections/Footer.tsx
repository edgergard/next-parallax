import React from "react";
import { twMerge } from "tailwind-merge";
import BackgroundImage from "@/assets/images/footer-image.png";
import { Anchor } from "@/enums";

interface SectionAnchor {
  id: number;
  name: string;
  anchor: string;
}

const sectionAnchors: SectionAnchor[] = [
  {
    id: 0,
    name: "Home",
    anchor: Anchor.Hero,
  },
  {
    id: 1,
    name: "Leaderboard",
    anchor: Anchor.Leaderboard,
  },
  {
    id: 2,
    name: "About",
    anchor: Anchor.About,
  },
];

const links = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer
      aria-label="footer"
      className={twMerge("flex flex-col h-[700px]", className)}
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-auto flex flex-col gap-y-[27px] px-page-x">
        <nav
          className="flex justify-center gap-x-[77px] text-white font-semibold"
        >
          {sectionAnchors.map(({ id, name, anchor }) => (
            <a className="cursor-pointer" href={`#${anchor}`} key={id}>
              {name}
            </a>
          ))}
        </nav>
        <div className="w-full h-px bg-dark-gray-2" />

        <div className="flex justify-between">
          <div className="flex gap-x-[9px]">
            {links.map((link) => (
              <div className="size-8 bg-dark-gray-2 rounded-full" key={link} />
            ))}
          </div>

          <div className="flex gap-x-8">
            {links.map((link) => (
              <span
                className="text-[12px] cursor-pointer text-dark-gray-2"
                key={link}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
