import { FaElementor, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoWordpress } from "react-icons/bi";
import { SiStrapi } from "react-icons/si";
import Image from "next/image";
const WorkItem = (props) => {
  return (
    <div className="wrapper container mx-auto  ">
      <div
        id="work-details"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10"
      >
        <div className=" space-y-4">
          <div className=" flex gap-10">
            <h2 className=" font-bebas text-3xl opacity-0" id="work-title">
              {props.title}
            </h2>
            <span
              className="flex opacity-0 items-center justify-center text-sm "
              id="owner"
            >
              {props.owner}
            </span>
          </div>
          <div className=" space-y-4">
            <p id="work-description" className="opacity-0">
              {props.description}
            </p>
            <div className=" flex gap-5">
              {props.stack.includes("React") ? (
                <span
                  className="flex gap-2 text-center items-center translate-y-4 opacity-0"
                  id="stack-item"
                >
                  <FaReact color="#43B53C" />
                  <p>React</p>
                </span>
              ) : null}

              {props.stack.includes("TailwindCSS") ? (
                <span
                  className="flex gap-2 text-center items-center translate-y-4 opacity-0"
                  id="stack-item"
                >
                  <BiLogoTailwindCss color="#43B53C" />
                  <p>TailwindCSS</p>
                </span>
              ) : null}

              {props.stack.includes("Strapi") ? (
                <span
                  className="flex gap-2 text-center items-center translate-y-4 opacity-0"
                  id="stack-item"
                >
                  <SiStrapi color="#43B53C" />
                  <p>Strapi</p>
                </span>
              ) : null}

              {props.stack.includes("WordPress") ? (
                <span
                  className="flex gap-2 text-center items-center translate-y-4 opacity-0"
                  id="stack-item"
                >
                  <BiLogoWordpress color="#43B53C" />
                  <p>WordPress</p>
                </span>
              ) : null}
              {props.stack.includes("Elementor") ? (
                <span
                  className="flex gap-2 text-center items-center translate-y-4 opacity-0"
                  id="stack-item"
                >
                  <FaElementor color="#43B53C" />
                  <p>Elementor</p>
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div id="work-image">
          <a target="_blank" href={props.destinationURL}>
            <Image
              id="image"
              src={props.imageURL}
              width={580}
              height={386}
              alt={props.imageAlt}
              className="opacity-0"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
