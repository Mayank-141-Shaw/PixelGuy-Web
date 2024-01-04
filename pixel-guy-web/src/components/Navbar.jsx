"use client";
import React, { useEffect, useState } from "react";

import { HiMiniXMark, HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaTimesCircle } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

import logo from "../assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/service" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  let [state, setState] = useState({
    open: false,
    reveal: false,
  });

  const { scrollY } = useScroll();

  const pathname = usePathname();

  const update = () => {
    if (scrollY?.get < scrollY?.getPrevious) {
      setState({ ...state, reveal: false });
      console.log("visible");
    } else if (
      scrollY?.getVelocity > 100 &&
      scrollY?.get > scrollY?.getPrevious
    ) {
      setState({ ...state, reveal: true });
      console.log("hidden");
    }
  };

  useEffect(() => {
    return scrollY.on("change", () => update());
  });

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={state.reveal ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={`shadow-md w-full fixed top-0 left-0 transition-all duration-[1s] ease-in`}
    >
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Image src={logo} className="w-10 h-10 text-blue-600" />
          <span>PixelGuy</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setState({ ...state, open: !open })}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {state.open ? <HiMiniXMark /> : <HiMiniBars3BottomRight />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:p-0 px-9 transition-all duration-500 ease-in ${
            state.open
              ? "top-16 rounded-b-lg shadow-md bg-slate-700"
              : "top-[-500%] bg-transparent"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold ">
              <Link
                href={link.link}
                className="text-white transition-all duration-500 ease-in  duration-500 flex items-center justify-center"
              >
                <span
                  className={`${
                    pathname === link.link
                      ? "text-yellow-500"
                      : "text-white border-b-2 border-transparent"
                  } transition-all duration-250 ease-in hover:text-yellow-400`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button>
        </ul>
        {/* button */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
