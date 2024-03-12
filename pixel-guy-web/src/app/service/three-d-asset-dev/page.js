"use client";
import Image from "next/image";
import React from "react";
import productImg from "../../../assets/hero-2.png";
import assetImg from "../../../assets/hero-1.png";
import logo from "../../../assets/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import assetImg1 from "../../../assets/asset-1.jpeg";
import assetImg2 from "../../../assets/asset-2.jpg";
import assetImg3 from "../../../assets/asset-3.jpg";

export const ThreeDAssetPage = () => {
  return (
    <div>
      <section
        className="w-full h-screen"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${assetImg.src})`,
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
            3D Assets Development
          </h1>
        </div>
      </section>

      <section className="bg-transparent p-8 md:p-16 flex justify-center items-center">
        <div className="w-full md:w-[70%]">
          <p className="text-white text-[7vw] md:text-[5vw] font-bold text-shadow">
            Design and Render: Bringing Your Product Ideas to Stunning Reality
          </p>
          <p className="text-white text-[4vw] md:text-[2vw] font-semibold mt-4">
            Immerse your audience in captivating experiences with our
            exceptional 3D asset creation services. Our team of skilled artists
            utilizes cutting-edge software and meticulous attention to detail to
            craft stunning 3D models, textures, and animations that elevate your
            projects to new heights. We cater to a wide range of needs, from
            realistic product visualizations to fantastical game characters,
            ensuring your vision becomes a breathtaking 3D reality.
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
              src={assetImg1}
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
              src={assetImg3}
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
              src={assetImg2}
              className="h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      <section className="p-16 flex flex-col md:flex-row gap-8 items-center bg-yellow-500 border-b-4 border-yellow-700">
        <span className="text-[5vw] md:text-2xl text-center md:text-start p-0 m-0 font-semibold">
          For availing 3d assets services{" "}
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

export default ThreeDAssetPage;
