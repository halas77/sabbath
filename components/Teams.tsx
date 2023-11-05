"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

const projectContent = {
  projects: [
    {
      featuredImg: "/photo.JPG",
      title: "Dawit Mellese",
      desc: "Software Developer",
    },
    {
      featuredImg: "/photo.JPG",
      title: "Dawit Mellese",
      desc: "Software Developer",
    },
    {
      featuredImg: "/photo.JPG",
      title: "Dawit Mellese",
      desc: "Software Developer",
    },
    {
      featuredImg: "/photo.JPG",
      title: "Dawit Mellese",
      desc: "Software Developer",
    },
  ],
};

const Teams = () => {
  return (
    <section className="pt-5 bg-gray-100 overflow-x-hidden max-sm:pb-5">
      <div className="container px-4 mx-auto">
        <div className="flex justify-start items-center mb-8">
          <div className="mb-10 lg:mb-0 max-w-xl lg:px-16">
            <h2 className="text-heading text-2xl lg:text-3xl font-sans font-bold mb- ">
              Our{" "}
              <span className="border-b-2 border-sky-200 pr-10">
                Team
              </span>
            </h2>
          </div>
        </div>
        <div className="rounded-xl w-full md:px-16 grid grid-col-1 md:grid-cols-2 xl:grid-cols-5 gap-8 items-center justify-center">
          {projectContent.projects.map((item, index) => (
            <div
              key={item.title}
              className="my-2 pb-4 flex flex-col mx-auto text-center rounded-md ease-in-out duration-300"
            >
              <Image
                src={item.featuredImg}
                width={220}
                height={30}
                alt="Team Image"
                className="mx-auto object-fill"
              />
              <h2 className="font-bold font-sans text-gray-900 text-lg pt-3 pb-1">
                {item.title}
              </h2>
              <p className="text-gray-700 font-sans text-sm p-1">{item.desc}</p>
            </div>
          ))}
          <div className="mx-auto flex items-center justify-center mt-2">
          <Link
            href="/teams"
            className="font-sans font-semibold duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            Sabbath Team 
            <span className="text-gray-600 text-2xl pl-2">|</span>
            <span className="bg-slate-950 rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default Teams;
