import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center ml-16">
          <Image
            src="/steering-wheel.svg"
            alt="car showcase logo"
            width={32}
            height={18}
            className="object-contain text-white"
          />
           <h2 className="text-3xl font-extrabold text-white ml-2 ">GARI.</h2>
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;
