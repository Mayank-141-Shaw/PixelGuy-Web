"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageToken(props) {
  return (
    <motion.div
      initial={{ x: props.xi, y: props.yi }}
      whileInView={{ x: props.xf, y: props.yf }}
      // viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className={`absolute w-[20vw] h-[20vw] z-${props.z} hover:brightness-70 rounded-lg cursor-pointer object-fit overflow-hidden`}
    >
      <Image
        src={props.src}
        className="transition-all ease duration-[1s] h-full shadow-lg rounded-lg object-cover hover:scale-125"
      />
    </motion.div>
  );
}
