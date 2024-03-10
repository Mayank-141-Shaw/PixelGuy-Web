"use client";
import Image from "next/image";
import React from "react";
import heroImg4 from "../../../assets/hero-4.png";
import logo from "../../../assets/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import arch1Img from "../../../assets/arch1.jpg";
import arch2Img from "../../../assets/arch2.webp";
import archImg from "../../../assets/hero-4.png";

export const ArchPage = () => {
  return (
    <div>
      <section
        className="w-full h-screen"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${heroImg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="backdrop_layer w-full h-full flex flex-col justify-center items-center p-8 md:p-16"
          style={{ backdropFilter: "brightness(0.75)" }}
        >
          <h1 className="font-bold text-white text-[7vw] text-shadow">
            Architecture Visualization
          </h1>
        </div>
      </section>

      <section className="bg-transparent p-8 md:p-16 flex justify-center items-center">
        <div className="w-full md:w-[70%]">
          <p className="text-white text-[7vw] md:text-[5vw] font-bold text-shadow">
            Crafting Your Vision: Architectural Rendering Tailored to Your Needs
          </p>
          <p className="text-white text-[4vw] md:text-[2vw] font-semibold mt-4">
            From concept to completion, our team of experienced architects
            collaborates closely with you to translate your dreams into stunning
            and functional spaces. We offer a comprehensive range of
            architectural designs, ensuring every detail is meticulously
            considered to bring your unique vision to life.
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
          <div className="relative flex flex-col justify-between aspect-square">
            <Image src={arch1Img} className="h-full object-cover rounded-lg" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: 90, x: 10, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-lg bg-gray-800 w-full md:w-[200%] shadow-[0_32px_48px_rgba(0,0,0,0.8)] hover:cursor-pointer"
        >
          <div className="relative flex flex-col justify-between">
            <Image src={archImg} className="h-full object-cover rounded-lg" />
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
            <Image src={arch2Img} className="h-full object-cover rounded-lg" />
          </div>
        </motion.div>
      </section>

      <section className="p-16 flex flex-col md:flex-row gap-8 items-center bg-yellow-500 border-b-4 border-yellow-700">
        <span className="text-[5vw] md:text-2xl text-center md:text-start p-0 m-0 font-semibold">
          For availing architectural services{" "}
        </span>
        <Link
          href={"/contact/#mail-btn"}
          className="rounded-md w-fit flex px-6 md:ml-8 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white bg-gray-200 uppercase text-lg"
        >
          <Image src={logo} className="w-10" />{" "}
          <span className="font-semibold">Get a quote</span>
        </Link>
      </section>
    </div>
  );
};

export default ArchPage;
