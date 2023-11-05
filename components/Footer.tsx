import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-950 w-full mx-auto py-10 px-6 lg:px-16 grid lg:grid-cols-3 gap-4 text-gray-500">
        <div>
          <h1 className="w-full text-3xl font-bold text-sky-50">Sabbath</h1>
          <p className="py-4 text-sm font-sans">
            Sabbath is an innovative construction and furniture company
            dedicated to transforming architectural visions into reality. With a
            passion for precision and an eye for design, we create homes that
            exude elegance and comfort. Our expert team combines craftsmanship
            with creativity, ensuring every project is a unique masterpiece.
          </p>
          <div className="flex justify-between md:w-[80%] my-6">
            <Link href="/">
              <FaFacebook
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="/">
              <FaInstagram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="/">
              <FaTelegram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="/">
              <FaTiktok
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between lg:px-44 mt-6">
          <div>
            <h6 className="font-medium text-gray-300">Company</h6>
            <ul className="flex flex-col">
              <Link href="/about" className="py-2 text-sm hover:text-gray-300">
                About sabbath
              </Link>
              <Link
                href="/projects"
                className="py-2 text-sm hover:text-gray-300"
              >
                Works and Projects
              </Link>
              <Link
                href="/services"
                className="py-2 text-sm hover:text-gray-300"
              >
                Services
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-300">Contact</h6>
            <ul>
              <li className="py-2 text-sm">Call Us: +251 123 4567</li>
              <li className="py-2 text-sm">Email Us: sabbath7@gmail.com</li>
              <li className="py-2 text-sm">Location: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="bg-zinc-950 w-full flex justify-center items-center mx-auto pb-2">
          <p className="text-gray-500 mx-auto">
            Sabbath 2023 | All rights reserved &copy;
          </p>
        </div>
    </div>
  );
};

export default Footer;
