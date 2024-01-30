"use client";
import { HomepageHeroCarousel } from "@/components/HomepageHeroCarousel";
import heroImg1 from "../assets/hero-1.png";
import heroImg2 from "../assets/hero-2.png";
import heroImg3 from "../assets/hero-3.png";
import heroImg4 from "../assets/hero-4.png";
import heroImg5 from "../assets/hero-5.png";

import { motion } from "framer-motion";
import { ImageToken } from "@/components/ImageToken";

const carouselContent = [
  {
    src: heroImg1,
    title: "3D Asset Development",
    content:
      "Stylized and high definition assets ready for development and production",
  },
  {
    src: heroImg2,
    title: "Product Design",
    content:
      "Highly-detailed and stylized product designing, mockup and rendering",
  },
  {
    src: heroImg3,
    title: "Software Development",
    content: "Scalable full stack solutions development for all needs",
  },
  {
    src: heroImg4,
    title: "Architecture Visualization",
    content: "3d visualisation of interior and exterior designs",
  },
  {
    src: heroImg5,
    title: "Mixed reality Development",
    content: "Solution development for Extended reality problems",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomepageHeroCarousel>{carouselContent}</HomepageHeroCarousel>

      <section className="w-full md:p-16 h-[39vh] md:h-[90vh] lg:h-[170vh]">
        <div className="relative z-20 p-4 md:p-0">
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10vw] text-white font-bold text-shadow"
          >
            Video Content
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

      <section className="w-full p-4 md:p-16">
        <motion.h1 className="text-[6vw] text-white font-bold text-shadow">
          Works
        </motion.h1>
        <div className="w-full relative p-8 flex gap-4">
          {/* 5 work image tags */}
          <ImageToken
            src={heroImg5}
            xi={100}
            yi={100}
            z={10}
            top={0}
            left={10}
          />
          <ImageToken
            src={heroImg4}
            xi={150}
            yi={100}
            z={10}
            top={40}
            left={40}
          />
        </div>
      </section>
    </div>
  );
}
