import "./globals.css";

import type { Metadata, Viewport } from "next";

import ConfigProvider from "@/components/config-provider";
import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import Loader from "@/components/loader";
import ScrollProgress from "@/components/scroll-progress";
import SmoothScroll from "@/components/smooth-scroll";
import config from "@/config";
import { getSEOTags } from "@/lib/seo";
import localFont from "next/font/local";

const bdo = localFont({
  src: [
    { path: "../../../public/fonts/bdo-grotesk-bold.otf", weight: "700" },
    { path: "../../../public/fonts/bdo-grotesk-medium.otf", weight: "500" },
    { path: "../../../public/fonts/bdo-grotesk-regular.otf", weight: "400" },
  ],
  display: "swap",
});

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bdo.className} bg-BACKGROUND text-WHITE`}>
        <Loader />
        <SmoothScroll>
          <ConfigProvider>
            <ScrollProgress>
              {children}
              <Footer />
            </ScrollProgress>
          </ConfigProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
