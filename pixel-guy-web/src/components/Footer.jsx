"use client";

import Image from "next/image";
import React from "react";

import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
} from "react-icons/io5";
import logo from "../assets/logo.svg";
import Link from "next/link";

export const Footer = (props) => {
  return (
    <footer className="w-full bg-yellow-500 p-4 md:p-16">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-[70%] flex flex-col justify-start items-center md:items-start gap-4">
          <div className="flex justify-start items-center gap-8">
            <IoMailOutline className="hidden md:block md:text-[2.5vw] fill-black" />
            <a
              href="mailto:pixelguy616@gmail.com"
              className="cursor-pointer text-black hover:underline md:text-[1.2vw]"
            >
              pixelguy616@gmail.com
            </a>
          </div>
          <div className="flex justify-start items-center gap-8">
            <IoPhonePortraitOutline className="hidden md:block md:text-[2.5vw] fill-black" />
            <span className="font-bold">
              TEL:{" "}
              <a
                href="tel:+918617798212"
                className="cursor-pointer text-black hover:underline font-medium"
              >
                +91 861 779 8212
              </a>
            </span>
          </div>
          <div className="flex justify-start items-start gap-8">
            <IoLocationOutline className="hidden md:block md:text-[2.5vw] fill-black" />
            <p>
              <span className="font-bold text-lg">PixelGuy</span>
              <br />
              <span>POSTAL ADDRESS</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col justify-between items-center md:items-end gap-4">
          <div className="flex justify-end items-center gap-4">
            <span className="font-bold hidden md:block">FOLLOW US</span>
            <FaYoutube className="transition-all duration-150 ease-in rounded-full text-[10vw] md:text-[2.2vw] cursor-pointer fill-yellow-500 bg-black p-2 hover:bg-white hover:fill-black" />
            <FaFacebook className="transition-all duration-150 ease-in rounded-full text-[10vw] md:text-[2.2vw] cursor-pointer fill-yellow-500 bg-black p-2 hover:bg-white hover:fill-black" />
            <FaLinkedin className="transition-all duration-150 ease-in rounded-full text-[10vw] md:text-[2.2vw] cursor-pointer fill-yellow-500 bg-black p-2 hover:bg-white hover:fill-black" />
            <FaInstagram className="transition-all duration-150 ease-in rounded-full text-[10vw] md:text-[2.2vw] cursor-pointer fill-yellow-500 bg-black p-2 hover:bg-white hover:fill-black" />
          </div>
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 border-2 rounded-lg border-black p-2">
            <Image
              alt="logo"
              src={logo}
              className="w-10 h-10 text-blue-600 drop-shadow-md"
            />
            <span className="">PixelGuy</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Link href="/" className="text-sm underline">
              COPYRIGHT
            </Link>
            <Link href="/" className="text-sm underline">
              TERMS AND CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
