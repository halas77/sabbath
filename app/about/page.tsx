"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const solution = {
  text: {
    headingTitle: "More About Us",
    desc: "Sabbath is an innovative construction and furniture company dedicated to transforming architectural visions into reality. With a passion for precision and an eye for design, we create homes that exude elegance and comfort. Our expert team combines craftsmanship with creativity, ensuring every project is a unique masterpiece. Sabbath stands at the forefront of the construction, furniture and interior design industry. We are committed to crafting exceptional living spaces that reflect our clients' dreams and aspirations. With a blend of expertise, innovation, and style, we turn ordinary houses into extraordinary homes, redefining the art of living.",
  },
  images: {
    img1: "/about1.jpg",
    img3: "/img9.jpg",
    img2: "/about4.jpg",
  },

  experience: {
    year: "10+",
    label: "years of experience",
  },
};

const page = () => {
  return (
    <section className="py-28 bg-light overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 mx-auto">
          <div className="lg:flex space-x-2 justify-between">
            <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
              <div className="flex gap-2">
                <div className="flex flex-col space-y-2">
                  <div></div>
                  <div className="flex justify-end gap-2">
                    <div className="w-4/12 flex">
                      <div className="ml-auto">
                        <div className="bg-yellow-400 w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                      </div>
                    </div>
                    <div className="w-6/12"></div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="bg-greenLight w-10 h-10 lg:w-20 lg:20 rounded-2xl rounded-tr-[200px]"></div>
                    </div>
                    <div>
                      <Image
                        src={solution.images.img2}
                        width={370}
                        height={400}
                        alt="Image"
                        className="object-contain h-full w-full rounded-lg shadow-2xl xl:w-[500px]"
                      />
                    </div>
                    {solution.experience.label && (
                      <div>
                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                          <strong className="block font-bold text-primary text-xl lg:text-5xl">
                            {solution.experience.year}
                          </strong>
                          <span>{solution.experience.label}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 relative z-10">
              {solution.text.headingTitle && (
                <h2 className="text-heading font-sans text-2xl lg:text-4xl font-bold mb-5">
                  {solution.text.headingTitle}
                </h2>
              )}
              {solution.text.desc && (
                <p className="text-body leading-relaxed mb-10">
                  {solution.text.desc}
                </p>
              )}

              <div className="flex max-md:flex-col md:space-x-3 text-center items-center justify-center mx-auto">
                <Link
                  href="/services"
                  className="text-[16px] max-md:my-3 py-4 px-14 border-2 border-sky-200 text-gray-900 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Explore our services
                </Link>
                <Link
                  href="/projects"
                  className="text-[16px] max-md:mb-3 py-4 px-14 max-md:text-lg bg-sky-200 text-slate-900 font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 border hover:border-sky-200 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Show our portfolio
                </Link>
              </div>

              <div className="flex space-x-10 items-center justify-center lg:mt-14">
                <Link href="/">
                  <FaFacebook
                    size={30}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </Link>
                <Link href="/">
                  <FaInstagram
                    size={30}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </Link>
                <Link href="/">
                  <FaTelegram
                    size={30}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </Link>
                <Link href="/">
                  <FaTiktok
                    size={30}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
