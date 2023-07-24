"use client";
import Link from "next/link";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  const [name, setName] = useState("AshtonFabby");
  const valuePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomize = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const ogValue = "AshtonFabby";
      setName(
        name
          .split("")
          .map(() => valuePool[Math.floor(Math.random() * valuePool.length)])
          .join("")
      );

      if (iterations > 10) {
        clearInterval(interval);
        setName(ogValue);
      }

      iterations++;
    }, 30);
  };

  return (
    <>
      <nav className=" mt-8 lg:hidden mx-auto">
        <div className="flex justify-between items-center container">
          <Link href="/" className=" font-bebas text-xl">
            <h4>AshtonFabby</h4>
          </Link>

          <div className="lg:hidden">
            <Hamburger
              size={24}
              rounded
              onToggle={handleNavClick}
              easing="ease-in"
            />
          </div>
        </div>
        <div
          className={`absolute duration-300 ease-linear w-screen ${
            navOpen ? "right-0 " : "-right-full"
          }`}
        >
          {/* FIXME: animation only working in entry */}
          <div
            className={`${
              navOpen ? "" : "hidden"
            } h-[83.5vh] bg-dark w-screen flex flex-col justify-center items-center lg:hidden"`}
          >
            <div className=" links flex flex-col gap-10 items-center justify-center">
              <a href="#bio" className="">
                Bio
              </a>
              <a href="#work" className="">
                Projects
              </a>
              <a href="#services" className="">
                Services
              </a>
              <a href="#contact" className="">
                Contact
              </a>
            </div>
            <button className="bg-primary px-7 py-2 text-dark font-semibold mt-28 active:bg-green-800 active:text-white transition-colors duration-75">
              Download CV
            </button>
          </div>
        </div>
      </nav>
      <nav className="justify-between items-center container pt-8 hidden lg:flex mx-auto">
        <Link href="/" className="font-mono text-2xl font-black">
          <h4 onMouseOver={randomize} className="uppercase">
            {name}
          </h4>
        </Link>
        <div className=" links flex gap-10 items-center justify-center transition-colors ease-in-out delay-100">
          <a href="#bio" className=" hover:text-primary">
            Bio
          </a>
          <a href="#work" className=" hover:text-primary">
            Projects
          </a>
          <a href="#services" className=" hover:text-primary">
            Services
          </a>
          <a href="#contact" className=" hover:text-primary">
            Contact
          </a>
        </div>
        <button className="bg-primary px-7 py-2 text-dark font-semibold hover:bg-transparent hover:text-light border-2 border-primary transition-colors ease-in-out delay-100">
          Download CV
        </button>
      </nav>
    </>
  );
};

export default NavBar;
