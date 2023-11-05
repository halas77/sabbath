"use client";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdCall, MdShare } from "react-icons/md";

import { motion } from "framer-motion";

import Link from "next/link";
import Form from "@components/Form";

const Contact = () => {
  return (
    <div className="w-full text-black bg-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-4 md:mx:24 lg:mx-32 my-12">
          <h1 className="font font-extrabold text-3xl font-sans mb-10">
            CONTACT{" "}
            <span className="font-sans border-b-2 border-sky-200 pb-1 pr-10">
              US
            </span>
          </h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-zinc-200 rounded-lg px-4 flex items-center h-28">
              <div className="bg-zinc-300 p-3 rounded-full">
                <i className="text-slate-900">
                  <TiLocation size={28} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-800">
                  Our Address
                </h2>
                <p className="font-sans text-gray-600 text-sm">
                  {" "}
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className="bg-zinc-200 rounded-lg px-4 flex items-center h-28">
              <div className="bg-zinc-300 p-3 rounded-full">
                <i className="text-slate-900">
                  <MdEmail size={28} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-800">
                  Email Us
                </h2>
                <p className="font-sans text-gray-600 text-sm">
                  {" "}
                  sabbath7@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-zinc-200 rounded-lg px-4 flex items-center h-28">
              <div className="bg-zinc-300 p-3 rounded-full">
                <i className="text-slate-900">
                  <MdCall size={28} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-800">
                  Call Us
                </h2>
                <p className="font-sans text-gray-600 text-sm">
                  {" "}
                  +251 913 141634
                </p>
              </div>
            </div>

            <div className="bg-zinc-200 rounded-lg p-4 flex items-center h-28 ">
              <div className="bg-zinc-300 p-3 rounded-full">
                <i className="text-slate-900">
                  <MdShare size={25} />{" "}
                </i>
              </div>
              <div className="p-5">
                <h2 className="pb-2 text-xl font-sans font-bold  text-gray-800">
                  Social Links
                </h2>
                <div className="flex gap-3 ">
                  <Link href="https://www.facebook.com/profile.php?id=61552083860876&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                      <FaFacebook size={23} />
                    </div>
                  </Link>
                  <Link href="https://instagram.com/sabbath_construction?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                      <FaInstagram size={23} />
                    </div>
                  </Link>
                  <Link href="https://t.me/sabbathconstruction" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-700 hover:text-gary-800 ease-in-out duration-300">
                      <FaTelegram size={23} />
                    </div>
                  </Link>

                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-700 hover:text-gray-800 ease-in-out duration-300">
                      <FaTiktok size={23} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Form />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
