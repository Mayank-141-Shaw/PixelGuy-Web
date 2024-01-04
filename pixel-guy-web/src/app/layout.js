import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import bg from "../assets/bg-textured.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixelGuy Studios",
  description:
    "PixelGuy Studios website for all business, products and services",
  keywords:
    "studios, pixel, guy, website, product, service, animation, 3d, art, development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-100`}
        style={{
          background: `url(${bg.src})`,
          backgroundRepeat: "repeat",
          height: "300vh",
        }}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
