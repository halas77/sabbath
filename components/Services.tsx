"use client"
import {motion} from  "framer-motion"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const services = {
  heading: {
    heading: "Our Services",
    desc: "Welcome to Sabbath, where we offer a comprehensive range of services dedicated to creating and enhancing your living spaces. Our team is committed to turning your dreams into a reality. Discover how we can bring your vision to life.",
  },
  items: [
    {
      icons: "/construction.png",
      title: "Construction",
      desc: "We build homes with precision, meeting industry standards and your unique specifications.",
    },
    {
      icons: "/int2.jpeg",
      title: "Interior Design",
      desc: "Tailored designs to transform interiors into inviting spaces.",
    },
    {
      icons: "/consult1.png",
      title: "Architectural Consultation",
      desc: "Our experts offer guidance and expertise to bring your dream home to life.",
    },

    {
      icons: "/manage.png",
      title: "Project Management",
      desc: "A seamless process, from concept to completion, ensuring quality and timelines are met.",
    },

    {
      icons: "/furn.png",
      title: "Furniture Design and Manufacturing",
      desc: "Crafted for style and functionality, our furniture complements your home's aesthetic. ",
    },

    {
      icons: "/decor3.png",
      title: "Styling and Decoration",
      desc: "We breathe new life into existing spaces, enhancing functionality and beauty.",
    },
  ],
};

const Services = () => {
  return (
    <section className="py-8 bg-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-3">
            Our{" "}
            <span className="border-b-2 font-sans border-sky-300 pr-10">
              Services
            </span>
          </h2>
          {services.heading.heading && (
            <p className="text-gray-600 leading-relaxed mb-7 text-md font-sans">
              {services.heading.desc}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:p-12">
          {services.items.map((item, index) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-gray-100 border border-gray-300">
                  <Image src={item.icons} width={50} height={50} alt="Image" />
                </span>
              </div>
              <div>
                {item.title && (
                  <h3 className="text-heading font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                )}
                {item.desc && (
                  <p className="leading-relaxed text-gray-700 text-sm font-sans">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex items-center justify-center max-md:mt-10">
          <Link
            href="/services"
            className="font-sans font-semibold duration-300 transition-all ease-in-out py-3 px-6 flex border border-gray-400 rounded-full space-x-3 items-center hover:border-gray-600"
          >
            More about our services
            <span className="text-gray-600 text-2xl pl-2">|</span>
            <span className="bg-slate-950 rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Services;
