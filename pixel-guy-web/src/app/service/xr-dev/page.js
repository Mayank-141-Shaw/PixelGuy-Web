"use client";
import Image from "next/image";
import React from "react";
import webImg from "../../../assets/hero-3.png";
import Link from "next/link";
import logo from "../../../assets/logo.svg";
import { motion } from "framer-motion";
import xrImg1 from "../../../assets/xr-1.png";
import xrImg2 from "../../../assets/xr-2.jpg";
import xrImg3 from "../../../assets/xr-3.jpg";
import xrImg from "../../../assets/hero-5.png";

export const XrDevPage = () => {
  return (
    <div>
      <section
        className="w-full h-screen"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${xrImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="backdrop_layer w-full h-full flex flex-col justify-center items-center p-8 md:p-16"
          style={{ backdropFilter: "brightness(0.5)" }}
        >
          <h1 className="font-bold text-white text-[7vw] text-shadow">
            XR Development
          </h1>
        </div>
      </section>

      <section className="bg-transparent p-8 md:p-16 flex justify-center items-center">
        <div className="w-full md:w-[70%]">
          <p className="text-white text-[7vw] md:text-[5vw] font-bold text-shadow">
            Beyond Reality: Captivating XR Development Services
          </p>
          <p className="text-white text-[4vw] md:text-[2vw] font-semibold mt-4">
            Push the boundaries of user experience with our comprehensive XR
            development services. Our team of passionate developers crafts
            immersive virtual reality (VR), augmented reality (AR), and mixed
            reality (MR) experiences that engage, educate, and inspire. We
            combine cutting-edge technologies with creative storytelling to
            build captivating XR solutions that transform the way you interact
            with the world.
          </p>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-16 p-16 mt-16 mb-16 overflow-hidden">
        <motion.div
          whileInView={{ y: 20, x: 20, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-lg bg-gray-800 aspect-square shadow-[0_32px_48px_rgba(0,0,0,0.8)] hover:cursor-pointer"
        >
          <div className="relative flex flex-col justify-between h-full ">
            <Image
              alt="img"
              src={xrImg1}
              className="h-full object-cover rounded-lg w-fit"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: 90, x: 10, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-lg bg-gray-800 w-full md:w-[177%] shadow-[0_32px_48px_rgba(0,0,0,0.8)] hover:cursor-pointer"
        >
          <div className="relative h-full flex flex-col justify-between">
            <Image
              alt="img"
              src={xrImg2}
              className="h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div></div>

        <motion.div
          whileInView={{ y: -20, x: 100, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-lg bg-gray-800 h-full w-[120%] shadow-[0_32px_48px_rgba(0,0,0,0.8)] hover:cursor-pointer"
        >
          <div className="relative h-full flex flex-col justify-between">
            <Image
              alt="img"
              src={xrImg3}
              className="h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      <section className="p-16 flex flex-col md:flex-row gap-8 items-center bg-yellow-500 border-b-4 border-yellow-700">
        <span className="text-[5vw] md:text-2xl text-center md:text-start p-0 m-0 font-semibold">
          For availing XR development services{" "}
        </span>
        <Link
          href={"/contact/#mail-btn"}
          className="rounded-md w-fit flex px-6 md:ml-8 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white bg-gray-200 uppercase text-lg"
        >
          <Image alt="img" src={logo} className="w-10" />{" "}
          <span className="font-semibold">Get a quote</span>
        </Link>
      </section>
    </div>
  );
};

export default XrDevPage;
