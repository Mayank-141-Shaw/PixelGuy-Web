"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageToken(props) {
  return (
    <motion.div
      initial={{ x: props.xi, y: props.yi }}
      whileInView={{ x: 0, y: 0 }}
      // viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={`absolute top-[${props.top}px] left-[${props.left}px] w-[350px] h-[350px] z-${props.z}`}
    >
      <Image
        src={props.src}
        className="h-full shadow-lg rounded-lg object-cover"
      />
    </motion.div>
  );
}
