"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { nav_links } from "@Constants";
import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="py-2 md:px-8 px-4 border bg-white">
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
                  <Image
                    src="/hero/mylogo.png"
                    width={160}
                    height={10}
                    alt="Logo"
                    className="bg-white "
                  />
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
                  className="px-10 py-5 bg-sky-950 font-bold font-sans rounded-full text-white hidden lg:inline-block hover:bg-zinc-700"
                >
                  {" "}
                  Contact Us
                </Link>
                <button className="block lg:hidden" onClick={navHandle}>
                  <HiBars3 size={35} />
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
        <div className="bg-white w-[70%] top-0 right-0 z-[9999] h-screen fixed ">
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
                    onClick={navHandle}
                    href={item.href}
                    className="group text-lg text-semibold flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex mx-auto text-center justify-center items-center">
              <Link
                onClick={navHandle}
                href="/contact"
                className="px-10 py-4 bg-sky-950 font-bold font-sans rounded-full text-white lg:hidde"
              >
                {" "}
                Contact Us
              </Link>
            </div>
            <div>
              <div className="flex justify-between md:w-[80%] my-10">
                <Link href="https://www.facebook.com/profile.php?id=61552083860876&mibextid=ZbWKwL">
                  <FaFacebook
                    size={30}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
                <Link href="https://instagram.com/sabbath_construction?igshid=NGVhN2U2NjQ0Yg==">
                  <FaInstagram
                    size={30}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
                <Link href="https://t.me/sabbathconstruction">
                  <FaTelegram
                    size={30}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
                <Link href="https://www.tiktok.com/@sabbath.construction?_r=1&_d=demc7a483bk1bd&sec_uid=MS4wLjABAAAAUxSjIqJohoda08ei67dgdL0RwrB4zIi4Y5foFJ3pKaulHmgKZFgHVqxKFqaxugzS&share_author_id=6880749743866414086&sharer_language=en&source=h5_m&u_code=demc79em6hdblh&timestamp=1699195467&user_id=6880749743866414086&sec_user_id=MS4wLjABAAAAUxSjIqJohoda08ei67dgdL0RwrB4zIi4Y5foFJ3pKaulHmgKZFgHVqxKFqaxugzS&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7285574843830896389&share_link_id=65898714-2e6c-4a09-a454-c41479448c06&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5">
                  <FaTiktok
                    size={30}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
