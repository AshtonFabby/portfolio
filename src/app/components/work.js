"using client";
import { FaElementor, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoWordpress } from "react-icons/bi";
import { SiStrapi } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
// import { gsap, Power3, ScrollTrigger } from "gsap/all";

const WorkSection = () => {
  return (
    <section className=" my-10 md:my-20 " id="work">
      <h1 className=" font-bebas text-5xl text-center">MY Work</h1>

      <div className="wrapper w-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10">
          <div className=" space-y-4">
            <div className=" flex gap-10">
              <h2 className=" font-bebas text-3xl">KP Records website</h2>
              <span className="flex items-center justify-center text-sm opacity-30">
                For Client
              </span>
            </div>
            <p id="please-work">
              KP Records is a corporate website that provides information about
              the studio and its services. The website serves as a platform to
              showcase artist profiles and promote their music to a wider
              audience. In addition, it informs visitors how the studio helps
              upcoming artists succeed.
            </p>
            <div className=" flex gap-5">
              <span className="flex gap-2 text-center items-center">
                <FaReact color="#43B53C" />
                <p>React</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <BiLogoTailwindCss color="#43B53C" />
                <p>TailwindCSS</p>
              </span>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://kprecords.vercel.app/">
              <Image
                src="/assets/images/kp.png"
                width={580}
                height={386}
                alt="kp records mockup"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper w-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10">
          <div className=" space-y-4">
            <div className=" flex gap-10">
              <h2 className=" font-bebas text-3xl">SGIHR website</h2>
              <span className="flex items-center justify-center text-sm opacity-30">
                For Client
              </span>
            </div>
            <p>
              This website serves as a corporate portfolio website for sgihr,
              where clients can conveniently book appointments and access
              information about the business. Our website also showcases the
              range of services that we offer, providing clients with a
              comprehensive understanding of our capabilities.
            </p>
            <div className=" flex gap-5">
              <span className="flex gap-2 text-center items-center">
                <BiLogoWordpress color="#43B53C" />
                <p>WordPress</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <FaElementor color="#43B53C" />
                <p>Elementor</p>
              </span>
            </div>
          </div>
          <div>
            <a target="_blank" href="http://sgihr.co.zw/">
              <Image
                src="/assets/images/sgihr.png"
                width={580}
                height={386}
                alt="sgihr website mockup"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper w-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10">
          <div className=" space-y-4">
            <div className=" flex gap-10">
              <h2 className=" font-bebas text-3xl">Food delivery website</h2>
              <span className="flex items-center justify-center text-sm opacity-30">
                For Client
              </span>
            </div>
            <p>
              LaRealeza is a food delivery platform that allows users to order
              from multiple local restaurants all in one place. With a variety
              of menus to choose from, customers can easily select their desired
              dishes and have them delivered straight to their doorstep.
            </p>
            <div className=" flex gap-5">
              <span className="flex gap-2 text-center items-center">
                <FaReact color="#43B53C" />
                <p>React</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <BiLogoTailwindCss color="#43B53C" />
                <p>TailwindCSS</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <SiStrapi color="#43B53C" />
                <p>Strapi</p>
              </span>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://larealeza.vercel.app/">
              <Image
                src="/assets/images/la-realeza.png"
                width={580}
                height={386}
                alt="kp records mockup"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10">
          <div className=" space-y-4">
            <div className=" flex gap-10">
              <h2 className=" font-bebas text-3xl">Food delivery website</h2>
              <span className="flex items-center justify-center text-sm opacity-30">
                For Client
              </span>
            </div>
            <p>
              iAdvertise store is a is a business advertising platform where
              different companies can list their businesses and products
            </p>
            <div className=" flex gap-5">
              <span className="flex gap-2 text-center items-center">
                <FaReact color="#43B53C" />
                <p>React</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <BiLogoTailwindCss color="#43B53C" />
                <p>TailwindCSS</p>
              </span>
              <span className="flex gap-2 text-center items-center">
                <SiStrapi color="#43B53C" />
                <p>Strapi</p>
              </span>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://iadvertise.store">
              <Image
                src="/assets/images/iadvertise.png"
                width={580}
                height={386}
                alt="iadvertise mockup"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper w-screen py-44 flex flex-col items-center justify-center container mx-auto">
        <div className="  text-center">
          <h2 className=" font-bebas text-7xl text-primary ">
            Not impressed yet?
          </h2>
          <Link href={"/"} className=" hover:text-primary duration-100">
            check out other projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
