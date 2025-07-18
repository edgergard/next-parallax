import { Inter, Metrophobic } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
});

const metrophobic = Metrophobic({
  subsets: ["latin"],
  weight: "400",
});

const clashGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../assets/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const fonts = { inter, metrophobic, clashGrotesk };

export default fonts;
