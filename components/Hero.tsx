"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const heroContent = {
  text: {
    subheading: "Redefining the art of living",
    heading: "We build and furnish your dream home",
    desc: "Sabbath stands at the forefront of the construction, furniture and interior design industry. We are committed to crafting exceptional living spaces that reflect our clients' dreams and aspirations. With a blend of expertise, innovation, and style, we turn ordinary houses into extraordinary homes.",
  },
  image: {
    img1: "/hero/Hero1.jpeg",
    img2: "/hero/Hero4.jpg",
    img3: "/hero/Hero5.jpg",
    img4: "/hero/Hero3.jpg",
    img5: "/hero/Hero2.jpg",
  },
};

const Hero = () => {
  return (
    <section className="py-4 md:px-10 max-sm:py-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 mb:10 lg:mb-0">
              {heroContent.text.subheading && (
                <span className="border-b border-sky-200 inline-block py-1 pr-5 font-sans text-heading font-semibold relative mb-7 before:content-['']  before:bg-white before:absolute before:w-2/3 before:bottom-0 before:z-[-1] before:left-0 before:top-0">
                  {" "}
                  {heroContent.text.subheading}
                </span>
              )}

              {heroContent.text.heading && (
                <h1 className="text-4xl lg:text-5xl font-extrabold text-heading mb-7">
                  {heroContent.text.heading}
                </h1>
              )}

              {heroContent.text.desc && (
                <p className="leading-relaxed text-gray-500 font-sans mb-10">
                  {heroContent.text.desc}
                </p>
              )}

              <div className="flex max-md:flex-col md:space-x-3 text-center ">
                <Link
                  href="/contact"
                  className="text-[16px] max-md:my-3 py-4 px-14 border-2 border-sky-200 text-gray-900 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Contact Us
                </Link>
                <Link
                  href="/projects"
                  className="text-[16px] max-md:mb-3 py-4 px-14 max-md:text-lg bg-sky-200 text-slate-900 font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 border hover:border-sky-200 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Our Works
                </Link>
              </div>
            </div>

            <div className="lg:w-6/12 space-y-2 max-lg:mt-3">
              <div className="flex space-x-2 items-stretch">
                <div className="w-8/12">
                  {heroContent.image.img1 && (
                    <Image
                      src={heroContent.image.img1}
                      width={400}
                      height={200}
                      alt="Image"
                      className="object-cover md:h-[390px] h-full w-full rounded-2xl "
                    />
                  )}
                </div>
                <div className="w-4/12 self-end space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {heroContent.image.img2 && (
                      <div>
                        <Image
                          src={heroContent.image.img2}
                          width={430}
                          height={432}
                          alt="Image"
                          className="object-cover h-full w-full rounded-2xl"
                        />
                      </div>
                    )}
                    <div className="bg-yellow-400 rounded-2xl rounded-tr-[200px]"></div>
                  </div>
                  {heroContent.image.img3 && (
                    <div>
                      <Image
                        src={heroContent.image.img3}
                        width={430}
                        height={432}
                        alt="Image"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-4/12">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                    {heroContent.image.img4 && (
                      <div>
                        <Image
                          src={heroContent.image.img4}
                          width={300}
                          height={200}
                          alt="Image"
                          className="object-cover h-full w-full rounded-2xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-5/12">
                  {heroContent.image.img5 && (
                    <Image
                      src={heroContent.image.img5}
                      width={300}
                      height={200}
                      alt="Image"
                      className="object-cover md:h-[155px] h-full w-full rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
