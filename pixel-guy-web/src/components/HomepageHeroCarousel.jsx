"use client";
import React, { useEffect, useState } from "react";
import "../style/HomepageHeroCarousel.style.css";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

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
    <div className="carousel">
      <div
        className="w-full h-full"
        // onMouseEnter={handleMouse}
        // onMouseLeave={handleMouse}
      >
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
                loading="lazy"
              />
              <div className="absolute inset-0 grid p-6 md:p-16 h-full w-full place-items-start bg-black/50">
                <div className="w-full h-full flex flex-col justify-center md:justify-end items-start">
                  <h1 className="mb-4 text-white font-bold md:py-4 text-start text-shadow uppercase text-4xl md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <p className="mb-12 text-white text-start text-xl text-shadow md:text-xl lg:text-2xl opacity-80">
                    Artists and Innovators in the World of Digital
                    Entertainment.
                  </p>
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
