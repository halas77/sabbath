"use client";

import {motion} from "framer-motion"

import { nav_links } from "@Constants";
import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const navHandle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (dimensions.width > 768 && nav) {
        setNav(false);
      }

      window.addEventListener("resize", handleResize);

      return (_) => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  return (
    <>
      <header className="py-5 md:px-8 shadow-sm rounded-b-2xl">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="xl:pl-10">
              <Link href="/">
                <Image src="/logo.png" width={120} height={10} alt="Logo" />
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-14 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-gray-950 border-b-2 border-slate-400 pb-1 font-bold"
                          : "text-gray-700 hover:text-gray-950 hover:border-b hover:border-slate-400 pb-1 ease-in-out duration-105"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA  */}

            <div>
              <Link
                href="/contact"
                className="px-10 py-5 bg-zinc-950 font-bold font-sans rounded-full text-white hidden lg:inline-block hover:bg-zinc-700"
              >
                {" "}
                Contact Us
              </Link>
              <button className="block lg:hidden" onClick={navHandle}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
        </motion.div>
      </header>

      {/* for mobile oreintation  */}

      <div
        className={
          nav
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[9999] top-0 fixed bg-black bg-opacity-50"
          onClick={navHandle}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3" onClick={navHandle}>
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 over-flow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {nav_links.map((item, index) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
