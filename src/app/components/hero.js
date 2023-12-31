"use client";

import NavBar from "./nav";
const HeroSection = () => {
  return (
    <section className="bg-[url('/assets/svg/bg-light.svg')] dark:bg-[url('/assets/svg/bg.svg')] bg-center bg-cover">
      <NavBar />
      <div className=" mx-auto container h-[550px] w-full flex flex-col items-center justify-center">
        <h2
          id="title"
          className="uppercase opacity-0 translate-y-9 text-4xl text-primary font-bebas z-0"
        >
          Creative Developer
        </h2>
        <h1
          id="name"
          className=" text-6xl md:text-8xl lg:text-9xl font-bebas text-center opacity-0 translate-y-14 z-0"
        >
          Farai Ashton Bauti
        </h1>
        <p id="description" className=" text-center md:w-6/12 opacity-0">
          I&apos;m a full-stack developer with an eye for design who specializes
          in crafting web-based experiences.
        </p>

        <a href="#contact">
          <button
            id="button"
            className="hover:bg-primary px-7 py-2 hover:text-dark border-2 border-primary active:text-light active:bg-green-700 active:border-green-700  font-semibold mt-5 transition-colors duration-75 opacity-0"
          >
            Get in touch
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
