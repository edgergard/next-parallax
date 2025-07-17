import type { Metadata } from "next";
import fonts from "@/styles/fonts";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Next parallax",
  description: "Next.js application with parallax scroll",
};

const { inter } = fonts;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html className={inter.className} lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
};

export default RootLayout;
