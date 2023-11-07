"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { projects, teams } from "@Constants";
import { motion } from "framer-motion";

const catagories = ["All", "Furniture", "Apartment"];

const Portfolio = () => {
  return (
    <div className="w-full text-slate-900 bg-light">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-4 md:mx:18 lg:mx-32 py-12">
          <h1 className="font font-extrabold text-3xl font-sans mb-10">
            OUR{" "}
            <span className="font-sans border-b border-sky-300 pb-1 pr-10">
              TEAM
            </span>
          </h1>
          <div className=""></div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {teams.map((item) => (
              <div
                key={item.label}
                className="bg-white border my-4 pb-5 flex flex-col mx-auto text-center rounded-md ease-in-out duration-300"
              >
                <Image
                  src={item.image}
                  width={220}
                  height={30}
                  alt="Project Image"
                  className="mx-auto"
                />
                <h2 className="font-bold font-sans text-gray-900 text-lg pt-2 pb-1">
                  {item.label}
                </h2>
                <p className="text-gray-600 font-sans px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
