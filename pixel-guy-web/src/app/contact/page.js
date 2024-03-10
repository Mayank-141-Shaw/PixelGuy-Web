"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { IoMailOutline, IoChevronDownOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <main className="p-8 md:p-16">
      <section className="w-full">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10vw] text-white font-bold text-shadow mt-16"
        >
          Contact
        </motion.h1>
        <motion.h3
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[3vw] text-white font-bold text-shadow mt-16"
        >
          Ready to connect? We love hearing from you
        </motion.h3>
      </section>
      <section className="mt-16 flex flex-col justify-center items-center">
        <h2 className="text-[5vw] text-white text-shadow font-bold">
          DROP A QUERY
        </h2>
        <IoChevronDownOutline className="text-[14vw] text-yellow-500" />
        <IoChevronDownOutline className="text-[10vw] text-yellow-700" />
        <IoChevronDownOutline className="text-[6vw] text-yellow-900" />
        <a
          id="mail-btn"
          href="mailto:pixelguy616@gmail.com"
          className="mt-10 transition-all ease duration-500 rounded-full bg-gray-700 p-16 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_0px_30px_rgba(255,255,0,0.5)] "
        >
          <IoMailOutline className="transition-all ease duration-500 text-[20vw] font-bold text-yellow-500 drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)]" />
        </a>
      </section>
    </main>
  );
};

export default Contact;
