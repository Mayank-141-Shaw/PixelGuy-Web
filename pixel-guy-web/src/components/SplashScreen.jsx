"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

import anime, { set } from "animejs";

export const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: "#logo",
      delay: 1000,
      keyframes: [
        { scale: 1, opacity: 1 },
        { scale: 2, opacity: 1 },
        { scale: 3.5, opacity: 1 },
        { scale: 9, opacity: 1 },
      ],
      duration: 2000,
      easing: "easeOutInElastic(1, .9)",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main
      className="w-full h-[100vh] bg-transparent flex justify-center items-center"
      ismounted={isMounted}
    >
      <Image alt="logo" id={"logo"} src={logo} className="w-[10vw]" />
    </main>
  );
};

export default SplashScreen;
