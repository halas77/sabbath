"use client";

import Image from "next/image";
import Link from "next/link";
import {BiChevronRight } from "react-icons/bi";

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
    {
      featuredImg: "/photo.JPG",
      title: "Dawit Mellese",
      desc: "Software Developer",
    },
  ],
};

const Teams = () => {
  return (
    <section className="pt-5 bg-gray-200 overflow-x-hidden max-sm:pb-5">
      <div className="container px-4 mx-auto">
        <div className="flex justify-start items-center">
          <div className="mb-10 lg:mb-0 max-w-xl lg:px-16">
            <h2 className="text-heading text-2xl lg:text-3xl font-sans font-bold mb- ">
              Our <span className="border-b-2 border-sky-200 pr-10">Team</span>
            </h2>
          </div>
        </div>
        <div className="rounded-xl w-full md:px-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-center justify-center">
          {projectContent.projects.map((item, index) => (
            <div
              key={item.title}
              className="my-2 lg:pt-3 pb-2 flex flex-col mx-auto text-center rounded-md ease-in-out duration-300"
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
        </div>
          <div className="mx-auto flex items-center justify-center mt-2 pb-3">
            <Link
              href="/teams"
              className="font-sans font-semibold duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center border-gray-400 hover:border-gray-600"
            >
              Sabbath Team
              <span className="text-gray-600 text-2xl pl-2">|</span>
              <span className="bg-slate-950 rounded-full w-8 h-8 flex items-center justify-center">
                <BiChevronRight className="w-6 h-6 text-white" />
              </span>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Teams;
