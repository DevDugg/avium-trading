import "./globals.css";

import ConfigProvider from "@/components/config-provider";
import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import SmoothScroll from "@/components/smooth-scroll";
import localFont from "next/font/local";

const bdo = localFont({
  src: [
    { path: "../../../public/fonts/bdo-grotesk-bold.otf", weight: "700" },
    { path: "../../../public/fonts/bdo-grotesk-medium.otf", weight: "500" },
    { path: "../../../public/fonts/bdo-grotesk-regular.otf", weight: "400" },
  ],
  display: "swap",
});

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
      <body className={`${bdo.className} bg-BACKGROUND text-WHITE`}>
        <SmoothScroll>
          <ConfigProvider>{children}</ConfigProvider>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
