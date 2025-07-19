import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import ArweaveImage from "@/assets/images/arweave-image.png";
import BittensorImage from "@/assets/images/bittensor-image.png";
import RedImage from "@/assets/images/red-image.png";
import SolanaImage from "@/assets/images/solana-image.png";
import TelegramImage from "@/assets/images/telegram-image.png";

interface CarouselElement {
  id: number;
  image: StaticImageData;
  width: number;
  height: number;
}

const carouselElements: CarouselElement[] = [
  {
    id: 0,
    image: SolanaImage,
    width: 334,
    height: 50,
  },
  {
    id: 1,
    image: ArweaveImage,
    width: 421,
    height: 100,
  },
  {
    id: 2,
    image: BittensorImage,
    width: 328,
    height: 58,
  },
  {
    id: 3,
    image: RedImage,
    width: 102,
    height: 102,
  },
  {
    id: 4,
    image: TelegramImage,
    width: 102,
    height: 102,
  },
];

const Carousel: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section aria-label="carousel-section" className={className}>
      <div className="flex flex-col gap-y-12 items-center jusify-center">
        <h3 className="font-family-grotesk text-font-size-h3">
          Projects integrated into the Arrakis AI Ecosystem
        </h3>

        <div className="flex gap-x-[180px]">
          {carouselElements.map(({ id, image, width, height }) => (
            <Image
              alt="carousel-image"
              className="object-contain"
              height={height}
              key={id}
              src={image}
              width={width}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
