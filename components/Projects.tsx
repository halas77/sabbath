"use client";

import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const projectContent = {
  projects: [
    {
      featuredImg: "/projects/Project1.jpg",
      title: "Tranquil Haven Retreat",
      desc: "A peaceful, nature-inspired haven that offers a serene escape from the hustle and bustle of daily life.",
    },
    {
      featuredImg: "/projects/Project2.jpg",
      title: "Coastal Elegance Estate",
      desc: " luxurious coastal estate that exudes elegance and offers stunning ocean views, perfect for refined living.",
    },
    {
      featuredImg: "/projects/Project3.jpg",
      title: "Zenith Sofa Collection",
      desc: "A sofa that represents the pinnacle of comfort, offering the highest quality in modern living room furniture.",
    },
    {
      featuredImg: "/projects/Project4.jpg",
      title: "Rustic Charm Cottage",
      desc: "A cozy and inviting cottage filled with rustic charm, evoking a sense of nostalgia and warmth.",
    },
    {
      featuredImg: "/projects/Project5.jpg",
      title: "Serenity Bedroom Set",
      desc: "A bedroom furniture set that aims to create a peaceful and calming atmosphere for a restful night's sleep.",
    },
    {
      featuredImg: "/projects/Project1.jpg",
      title: "Zen Garden Villa",
      desc: "A harmonious villa with a Zen garden that promotes tranquility and a sense of balance.",
    },
  ],
};

const Projects = () => {
  return (
    <section className="py-10 bg-white overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center mb-8">
          <div className="mb-5 lg:mb-0 max-w-3xl">
            <h2 className="text-gray-900 text-2xl lg:text-4xl font-bold mb-4 text-center font-sans">
              Our <span className="border-b-2 border-sky-200 pr-10">Works</span>
            </h2>

            <p className="leading-relaxed text-center font-sans text-md text-gray-700">
              Explore our portfolio of completed projects, where vision meets
              reality. From stunning residences to functional spaces, our
              finished projects embody craftsmanship, creativity, and client
              satisfaction. Join us on a journey through our success stories.
            </p>
          </div>
        </div>
        <div className="rounded-xl w-full md:px-16 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-center">
          {projectContent.projects.map((item, index) => (
            <div
              key={item.title}
              className="shadow-md bg-gray-100 my-6 pb-10 flex flex-col mx-auto text-center rounded-md ease-in-out duration-300 border border-zinc-200  hover:bg-gray-100 hover:scale-105"
            >
              <Image
                src={item.featuredImg}
                width={500}
                height={30}
                alt="Project Image"
                className="mx-auto md:h-[250px]"
              />
              <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-7 pb-5">
                {item.title}
              </h2>
              <p className="text-gray-700 font-sans text-md p-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex items-center justify-center mt-2 lg:mt-10">
          <Link
            href="/projects"
            className="font-sans font-semibold duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-500 border-gray-300"
          >
            More Projects
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

export default Projects;
