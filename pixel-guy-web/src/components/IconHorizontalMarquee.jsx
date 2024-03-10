import React from "react";

import "../style/marquee.css";
import logo from "../assets/logo.svg";
import Image from "next/image";

export const IconHorizontalMarquee = () => {
  const marquee = () => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  };

  marquee();

  return (
    <div className="scroller">
      <ul className="tag-list inner_scroller">
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
        <li>
          <Image src={logo} />
        </li>
      </ul>
    </div>
  );
};
