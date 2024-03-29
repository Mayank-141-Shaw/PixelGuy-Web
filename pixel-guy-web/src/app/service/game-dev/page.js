"use client";
import Image from "next/image";
import React from "react";
import gameDevImg from "../../../assets/game_dev.jpg";
import logo from "../../../assets/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import gameImg1 from "../../../assets/game-dev-1.jpg";
import gameImg2 from "../../../assets/game-dev-2.jpg";
import gameImg3 from "../../../assets/game-dev-3.jpg";

export const GameDevPage = () => {
  return (
    <div>
      <section
        className="w-full h-screen"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${gameDevImg.src})`,
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
            Game Development
          </h1>
        </div>
      </section>

      <section className="bg-transparent p-8 md:p-16 flex justify-center items-center">
        <div className="w-full md:w-[70%]">
          <p className="text-white text-[7vw] md:text-[5vw] font-bold text-shadow">
            Bring Your Game to Life: Comprehensive Game Development Services
          </p>
          <p className="text-white text-[4vw] md:text-[2vw] font-semibold mt-4">
            We are your one-stop shop for crafting exceptional gaming
            experiences. Our passionate team of game developers combines
            creativity with technical expertise to deliver innovative and
            engaging games across all platforms. Whether you have a fully
            fleshed-out concept or just a spark of an idea, we offer
            comprehensive services to guide your game from development to
            launch.
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
            <Image
              alt="img"
              src={gameImg1}
              className="h-full object-cover rounded-lg"
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
              src={gameImg2}
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
              src={gameImg3}
              className="h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      <section className="p-16 flex flex-col md:flex-row gap-8 items-center bg-yellow-500 border-b-4 border-yellow-700">
        <span className="text-[5vw] md:text-2xl text-center md:text-start p-0 m-0 font-semibold">
          For availing game development services{" "}
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

export default GameDevPage;
