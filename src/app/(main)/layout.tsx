import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avium Trading",
  description: "Avium Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-BACKGROUND text-WHITE`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
