"use client";
import { HomepageHeroCarousel } from "@/components/HomepageHeroCarousel";
import heroImg1 from "../assets/hero-1.png";
import heroImg2 from "../assets/hero-2.png";
import heroImg3 from "../assets/hero-3.png";
import heroImg4 from "../assets/hero-4.png";
import heroImg5 from "../assets/hero-5.png";
import logo from "../assets/logo.svg";
import clientMap from "../assets/map.png";
import { FaYoutube } from "react-icons/fa";

import img1 from "../assets/prod-1.png";
import img2 from "../assets/arch2.webp";
import img3 from "../assets/prod-2.jpg";
import img4 from "../assets/soft-1.jpg";
import img5 from "../assets/arch3.png";

import { motion } from "framer-motion";
import { ImageToken } from "@/components/ImageToken";
import Image from "next/image";
import Link from "next/link";

const carouselContent = [
  {
    src: heroImg1,
    title: "3D Asset Development",
    link: "/service/three-d-asset-dev",
    content:
      "Stylized and high definition assets ready for development and production",
  },
  {
    src: heroImg2,
    title: "Product Design",
    link: "/service/product-design",
    content:
      "Highly-detailed and stylized product designing, mockup and rendering",
  },
  {
    src: heroImg3,
    title: "Software Development",
    link: "/service/web-dev",
    content: "Scalable full stack solutions development for all needs",
  },
  {
    src: heroImg4,
    title: "Architecture Visualization",
    link: "/service/architecture-visualisation",
    content: "3d visualisation of interior and exterior designs",
  },
  {
    src: heroImg5,
    title: "Mixed reality Development",
    link: "/service/xr-dev",
    content: "Solution development for Extended reality problems",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HomepageHeroCarousel>{carouselContent}</HomepageHeroCarousel>

      <section className="w-full md:p-16 h-[39vh] md:h-[90vh] lg:h-[170vh]">
        <div className="relative z-20 p-4 md:p-0">
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10vw] text-white font-bold text-shadow"
          >
            Web Content
          </motion.h1>
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10vw] text-white font-bold text-right text-shadow"
          >
            Creatives
          </motion.h1>
        </div>
        <motion.div
          initial={{ translateY: "0%", translateX: "-10%" }}
          whileInView={{ translateY: "-15%", translateX: "0%" }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="relative z-0 translate-y-[-15%]"
        >
          <video
            loop
            muted
            autoPlay
            className="w-full shadow-xl rounded-xl h-full"
          >
            <source src="/bg-1.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="relative z-10 translate-y-[-110%]"
          initial={{ translateY: "-120%", translateX: "20%" }}
          whileInView={{ translateY: "-130%", translateX: "10%" }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <video
            loop
            muted
            autoPlay
            className="w-[80%] shadow-xl rounded-xl h-full"
          >
            <source src="/bg-2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      <section className="w-full mt-8 p-4 md:p-16 h-[90vw] md:h-[80vw]">
        <motion.h1 className="text-[6vw] text-white font-bold text-shadow">
          Works
        </motion.h1>
        <div className="w-full relative p-8 flex flex-col gap-4">
          {/* 5 work image tags */}
          <ImageToken
            src={img1}
            xi={"20vw"}
            yi={"10vw"}
            z={10}
            xf={"10vw"}
            yf={"0vw"}
          />
          <ImageToken
            src={img2}
            xi={"20vw"}
            yi={"20vw"}
            z={10}
            xf={"25vw"}
            yf={"12vw"}
          />
          <ImageToken
            src={img3}
            xi={"30vw"}
            yi={"10vw"}
            z={10}
            xf={"60vw"}
            yf={"0vw"}
          />

          <ImageToken
            src={img4}
            xi={"20vw"}
            yi={"20vw"}
            z={10}
            xf={"52vw"}
            yf={"30vw"}
          />
          <ImageToken
            src={heroImg4}
            xi={"20vw"}
            yi={"20vw"}
            z={10}
            xf={"15vw"}
            yf={"35vw"}
          />
        </div>
      </section>

      <section className="w-full bg-yellow-500 p-8 md:p-16">
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-center">
          <div className="flex drop-shadow">
            <FaYoutube className="text-red-600" size={"18vw"} />
            <Image
              src={logo}
              className="w-[10vw]"
              style={{
                transform: "translateX(-5vw) translateY(3vw)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <i className="text-[5vw] font-bold text-shadow-md">
              PixelGuy Studios
            </i>
            <br />
            <Link
              href={"#"}
              className="rounded-md w-fit flex px-6 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white hover:shadow-yellow-500 bg-gray-200 uppercase text-lg"
            >
              <Image alt="logo" src={logo} className="w-10" />{" "}
              <span className="font-semibold">Do visit our channel</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full hidden md:block h-[80vw] md:h-[100vh] overflow-x-hidden relative flex bg-yellow-900 p-16 justify-start items-start transition-all ease duration-[1s]">
        <p className="w-[150vw] font-bold text-[4vw] z-20">
          We are <span className="bg-blue-500 text-white">PixelGuy.</span>
          <br /> A creative agency that puts{" "}
          <span className="bg-blue-500 text-white">design</span> and{" "}
          <span className="bg-blue-500 text-white">development</span> at the
          front.
          <br />
          <Link
            href={"/contact/#mail-btn"}
            className="rounded-md w-full mt-8 flex px-6 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white hover:shadow-yellow-500 bg-gray-200 uppercase text-lg"
          >
            <Image alt="logo" src={logo} className="w-10" />{" "}
            <span className="font-semibold">Get a quote</span>
          </Link>
        </p>
        <div className="flex w-[100vw] translate-y-[10vw] -translate-x-[10vw]">
          <Image alt="bg" src={heroImg4} className="w-[50vw] z-0" />
          <Image
            src={heroImg3}
            alt="bg"
            className="w-[50vw] z-10 -translate-x-[90%] translate-y-[15%]"
          />
        </div>
      </section>

      <section className="w-full mt-8 p-4 md:p-16">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[6vw] text-white font-bold text-shadow"
        >
          Our Clients
        </motion.h1>
        <p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:pl-[10vw] w-full md:w-[80vw] text-[4vw] md:text-[1.5vw] mt-8 text-center font-bold text-shadow text-white"
        >
          We have seamlessly provided our services for clients at home and
          abroad. The atlas below shows the nations around the world where we
          have successfully delivered completed projects to, be it for prominent
          businesses, individuals, institutions or otherwise.
        </p>
        <Image
          src={clientMap}
          alt="map"
          className="w-full py-16 drop-shadow-[0_5px_10px_rgba(255,255,0,0.8)]"
        />
      </section>

      <section className="w-full flex flex-col items-center p-4 md:p-16">
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className=" text-[4vw] md:text-[3vw] mt-8 text-center font-bold text-shadow text-white"
        >
          One stop for all your technical needs
        </motion.p>
        <Link
          href={"/contact/#mail-btn"}
          className="rounded-md w-fit mt-4 flex px-6 py-3 transition-all duration-300 ease-in-out shadow-md items-center gap-4 hover:bg-gray-800 hover:text-white hover:shadow-yellow-500 bg-gray-200 uppercase text-lg"
        >
          <Image alt="logo" src={logo} className="w-10" />{" "}
          <span className="font-semibold">Get a quote</span>
        </Link>
      </section>
    </div>
  );
}
