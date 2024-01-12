"use client";
import React, { useEffect, useState } from "react";
import "../style/HomepageHeroCarousel.style.css";

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
            {item}
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
