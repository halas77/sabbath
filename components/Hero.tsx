"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-white">
          Effortlessly locate, reserve, or hire a vehicle in no time!
        </h1>
        <p className="hero__subtitle">
          Simplify your vehicle rental journey through our user-friendly booking
          procedure.
        </p>

        <CustomButton
          title="Discover Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero4.png"
            alt="hero image"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
