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
            <Link href="https://www.facebook.com/profile.php?id=61552083860876&mibextid=ZbWKwL">
              <FaFacebook
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="https://instagram.com/sabbath_construction?igshid=NGVhN2U2NjQ0Yg==">
              <FaInstagram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="https://t.me/sabbathconstruction">
              <FaTelegram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </Link>
            <Link href="https://www.tiktok.com/@sabbath.construction?_r=1&_d=demc7a483bk1bd&sec_uid=MS4wLjABAAAAUxSjIqJohoda08ei67dgdL0RwrB4zIi4Y5foFJ3pKaulHmgKZFgHVqxKFqaxugzS&share_author_id=6880749743866414086&sharer_language=en&source=h5_m&u_code=demc79em6hdblh&timestamp=1699195467&user_id=6880749743866414086&sec_user_id=MS4wLjABAAAAUxSjIqJohoda08ei67dgdL0RwrB4zIi4Y5foFJ3pKaulHmgKZFgHVqxKFqaxugzS&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7285574843830896389&share_link_id=65898714-2e6c-4a09-a454-c41479448c06&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5">
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
                Our Works
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
              <li className="py-2 text-sm">
                Call Us: +251 913 141634 / +251985926424
              </li>
              <li className="py-2 text-sm">Email Us: sabbathcon@gmail.com</li>
              <li className="py-2 text-sm">
                Location: Lebu Mebrat Hayel, A.A, Ethiopia
              </li>
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
