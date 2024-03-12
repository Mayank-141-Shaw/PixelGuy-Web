"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

import assetImg from "../../assets/hero-1.png";
import productImg from "../../assets/hero-2.png";
import webImg from "../../assets/hero-3.png";
import archImg from "../../assets/hero-4.png";
import xrImg from "../../assets/hero-5.png";
import gameImg from "../../assets/game_dev.jpg";
import mobileImg from "../../assets/mobile_dev.png";
import { useRouter } from "next/navigation";

export default function Service() {
  return (
    <main className="w-full bg-transparent p-8 md:p-16">
      <section className="w-full">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[15vw] md:text-[10vw] text-white font-bold text-shadow mt-16"
        >
          Services
        </motion.h1>
        <motion.h3
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[7vw] md:text-[3vw] text-white font-bold text-shadow mt-16"
        >
          {
            "More than technology, it's human-centered innovation: Partner with us to achieve your goals"
          }
        </motion.h3>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-16 p-16 mt-16 mb-16">
        <ServiceCard
          src={archImg}
          title={"Architecture Visualization"}
          link={"/service/architecture-visualisation"}
          x={20}
          y={40}
        />
        <ServiceCard
          src={productImg}
          link={"/service/product-design"}
          title={"Product Design"}
          x={-20}
          y={0}
        />
        <ServiceCard
          src={assetImg}
          link={"/service/three-d-asset-dev"}
          title={"3D Asset Development"}
          x={60}
          y={30}
        />
        <ServiceCard
          src={webImg}
          link={"/service/web-dev"}
          title={"Web Development"}
          x={70}
          y={50}
        />
        <ServiceCard
          src={mobileImg}
          link={"/service/mobile-dev"}
          title={"Mobile Apps"}
          x={60}
          y={90}
        />
        <ServiceCard
          src={gameImg}
          link={"/service/game-dev"}
          title={"Game Development"}
          x={0}
          y={10}
        />
        <ServiceCard
          src={xrImg}
          link={"/service/xr-dev"}
          title={"XR Development"}
          x={50}
          y={80}
        />
      </section>
    </main>
  );
}
