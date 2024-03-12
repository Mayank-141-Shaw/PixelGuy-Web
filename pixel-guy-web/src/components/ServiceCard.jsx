"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ServiceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: props.y, x: props.x, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="rounded-lg bg-gray-800 aspect-square shadow-[0_32px_48px_rgba(0,0,0,0.8)] hover:cursor-pointer"
    >
      <Link
        className="relative flex flex-col justify-between aspect-square"
        href={props.link || ""}
      >
        <Image
          alt="img"
          src={props.src}
          className="h-full object-cover rounded-lg"
        />
        <span className="text-white text-center text-xl uppercase absolute inset-0 flex items-end justify-center p-4 md:p-8 text-shadow font-bold">
          {props.title}
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
