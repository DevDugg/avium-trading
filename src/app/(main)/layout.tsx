import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import ConfigProvider from "@/components/config-provider";
import Footer from "@/components/footer/footer";
import Loader from "@/components/loader";
import Script from "next/script";
import ScrollProgress from "@/components/scroll-progress";
import SmoothScroll from "@/components/smooth-scroll";
import { ToastContainer } from "react-toastify";
import type { Viewport } from "next";
import colors from "@/colors";
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
        <ToastContainer toastStyle={{ background: colors.BLACK, color: colors.WHITE }} theme="dark" />
        <SmoothScroll>
          <ConfigProvider>
            <ScrollProgress>
              {children}
              <Footer />
            </ScrollProgress>
          </ConfigProvider>
        </SmoothScroll>
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X7QFWWYQDJ" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X7QFWWYQDJ');`}
      </Script>
    </html>
  );
}
