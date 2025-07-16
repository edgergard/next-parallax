import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next parallax",
  description: "Next.js application with parallax scroll",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
};

export default RootLayout;
