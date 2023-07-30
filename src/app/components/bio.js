import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoFlutter,
  BiLogoFigma,
  BiLogoDocker,
} from "react-icons/bi";
import Image from "next/image";

const Bio = () => {
  return (
    <section
      className=" container mx-auto lg:flex flex-row-reverse space-y-10 items-center lg:space-y-0 gap-10"
      id="bio"
    >
      <div className=" space-y-4 ">
        <h1
          id="bio-title"
          className=" opacity-0 translate-y-12 font-bebas text-5xl "
        >
          About me
        </h1>
        <p id="bio-description" className=" opacity-0">
          Hello! My name is Farai Ashton Bauti, and I am a full stack developer
          with a passion for UI/UX design. My expertise lies in identifying
          business problems and developing solutions using the latest technology
          trends, with a focus on ensuring user satisfaction and retention.
          <br />
          <br />
          In 2020, I co-founded DigitalVague, a software development company
          that specializes in creating digital experiences tailored to meet the
          unique goals of different organizations. Our team is committed to
          crafting solutions that not only meet functional requirements but also
          provide exceptional user experiences.
        </p>
        <h3 id="bio-stack-title" className="opacity=0 font-bebas text-4xl">
          My Stack
        </h3>
        <div className=" grid grid-cols-3">
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoJavascript color="#43B53C" />
            <p>JavaScript</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <FaReact color="#43B53C" />
            <p>React</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoTailwindCss color="#43B53C" />
            <p>Tailwind</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <FaLaravel color="#43B53C" />
            <p>Laravel</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoNodejs color="#43B53C" />
            <p>NodeJS</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoFlutter color="#43B53C" />
            <p>Flutter</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <FaWordpress color="#43B53C" />
            <p>WordPress</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoFigma color="#43B53C" />
            <p>Figma</p>
          </span>
          <span
            id="bio-stack-item"
            className=" opacity-0 flex gap-2 text-center items-center"
          >
            <BiLogoDocker color="#43B53C" />
            <p>Docker</p>
          </span>
        </div>
      </div>

      <Image
        src="/assets/images/farai.png"
        width={400}
        height={496}
        alt="Farai"
        id="bio-image"
        className="opacity-0"
      />
    </section>
  );
};

export default Bio;
