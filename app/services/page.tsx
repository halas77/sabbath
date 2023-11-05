"use client"


import { services } from "@Constants";
import Image from "next/image";
import { motion } from "framer-motion";



const Services = () => {
  return (
    <div className="w-full text-black bg-light">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
      <div className="mx-6 md:mx:18 lg:mx-32 py-12">
        <h1 className="font font-extrabold text-3xl font-sans mb-10">
          SERVICE{" "}
          <span className="font-sans border-b border-sky-300 pb-1 pr-10">
            WE OFFER
          </span>
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border boredr-gray-100 p-4 flex flex-col mx-auto text-center rounded-md hover:bg-gray-100 hover:scale-105 ease-in-out duration-300"
              >
                <Image src={item.icons} width={70} height={30} alt="Image" className="mx-auto rounded-xl border p-2" />
                <h2 className="font-bold text-slate-900 text-xl py-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Services;
