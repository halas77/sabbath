import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Services from "@components/Services";
import Teams from "@components/Teams";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Teams />
    </>
  );
}
