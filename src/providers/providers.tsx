"use client";

import type { JSX } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
