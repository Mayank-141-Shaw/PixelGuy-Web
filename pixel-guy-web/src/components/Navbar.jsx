"use client";
import React, { useEffect, useState } from "react";

import { HiMiniXMark, HiMiniBars3BottomRight } from "react-icons/hi2";
import { CgMenuRound } from "react-icons/cg";

import logo from "../assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];

  let [state, setState] = useState({
    open: false,
    reveal: false,
  });

  const toggleNavbar = () => {
    setState({ ...state, open: !state.open });
  };
  const pathname = usePathname();

  useEffect(() => {}, [state]);

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-[0.5s] ease-in ${
        state.open ? "bg-gray-900 md:bg-transparent" : "bg-transparent"
      } md:p-4`}
    >
      <div className="md:flex items-center justify-between p-4 md:px-10">
        {/* logo section */}
        <Link href={"/"}>
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <Image src={logo} className="w-10 h-10 text-blue-600" />
            <span className="text-white">PixelGuy</span>
          </div>
        </Link>
        {/* Menu icon */}
        <div
          onClick={toggleNavbar}
          className="absolute right-6 top-6 flex justify-center items-center cursor-pointer md:hidden w-7 h-7"
        >
          {state.open ? (
            <HiMiniXMark
              color="white"
              className="transition-all duration-[0.5s] ease-in-out"
            />
          ) : (
            <HiMiniBars3BottomRight
              color="white"
              className="transition-all duration-[0.5s] ease-in-out"
            />
          )}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:p-0 px-9 transition-all duration-[0.6s] ease-in ${
            state.open
              ? "top-16 rounded-b-lg bg-gray-900 md:bg-transparent"
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
                    pathname === link.link ? "text-yellow-500" : "text-white"
                  } transition-all text-shadow-sm duration-250 ease-in hover:text-yellow-400 drop-shadow-2xl`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
          {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
        </ul>
        {/* button */}
      </div>
    </nav>
  );
};

export default Navbar;
