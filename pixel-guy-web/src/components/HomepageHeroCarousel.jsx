"use client";
import React, { useEffect, useState } from "react";
import "../style/HomepageHeroCarousel.style.css";
import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const abzFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export function HomepageHeroCarousel({ children }) {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 8000);
    return () => clearInterval(interval);
  });
  return (
    <div className="carousel w-full h-screen">
      <div>
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? "show" : "not-show"}
            key={index}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt="image 1"
                className="h-full w-full object-cover"
                fill={true}
                loading="eager"
              />
              <div className="absolute inset-0 grid p-6 md:p-16 h-full w-full place-items-start bg-black/50">
                <div className="w-full h-full flex flex-col justify-center md:justify-end items-start">
                  <motion.h1
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${abzFont.className} mb-4 text-white font-bold md:py-4 text-start text-shadow uppercase text-4xl md:text-4xl lg:text-6xl`}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-12 text-white text-start text-xl text-shadow md:text-xl lg:text-2xl opacity-80"
                  >
                    {item?.content}
                  </motion.p>
                  <Link
                    href={item.link ? item.link : "/"}
                    className="rounded-md flex px-6 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white bg-gray-200 uppercase text-lg"
                  >
                    <Image alt="logo" src={logo} className="w-10" />{" "}
                    <span className="font-semibold">Explore</span>
                  </Link>
                  {/* <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="prev hidden" onClick={handlePre}>
          &#10094;
        </button>
        <button className="next hidden" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="page">
        {content.map((item, index) => (
          <span
            key={index}
            className={counter - 1 === index ? "dot active" : "dot"}
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
