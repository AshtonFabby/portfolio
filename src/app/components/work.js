"using client";
import Link from "next/link";

import WorkItem from "./work_item";

const WorkSection = () => {
  return (
    <section className=" my-10 md:my-20  " id="work">
      <h1 className=" font-bebas text-5xl text-center">MY Work</h1>

      <WorkItem
        title="KP Records website"
        owner="For Client"
        description="KP Records is a corporate website that provides information about
        the studio and its services. The website serves as a platform to
        showcase artist profiles and promote their music to a wider
        audience. In addition, it informs visitors how the studio helps
        upcoming artists succeed."
        destinationURL="https://kprecords.vercel.app/"
        imageURL="/assets/images/kp.png"
        imageAlt="kp records mockup"
        stack={["React", "TailwindCSS"]}
      />
      <WorkItem
        title="SGIHR website"
        owner="For Client"
        description="This website serves as a corporate portfolio website for sgihr,
        where clients can conveniently book appointments and access
        information about the business. Our website also showcases the
        range of services that we offer, providing clients with a
        comprehensive understanding of our capabilities."
        destinationURL="http://sgihr.co.zw/"
        imageURL="/assets/images/sgihr.png"
        imageAlt="sgihr website mockup"
        stack={["WordPress", "Elementor"]}
      />
      <WorkItem
        title="Food delivery Platform"
        owner="For Client"
        description="LaRealeza is a food delivery platform that allows users to order
        from multiple local restaurants all in one place. With a variety
        of menus to choose from, customers can easily select their desired
        dishes and have them delivered straight to their doorstep."
        destinationURL="https://larealeza.vercel.app/"
        imageURL="/assets/images/la-realeza.png"
        imageAlt="LaRealeza website mockup"
        stack={["React", "TailwindCSS", "Strapi"]}
      />
      <WorkItem
        title="iAdvertise.store"
        owner="For Client"
        description="iAdvertise store is a is a business advertising platform where
        different companies can list their businesses and products"
        destinationURL="https://iadvertise.store/"
        imageURL="/assets/images/iadvertise.png"
        imageAlt="iadvertise website mockup"
        stack={["React", "TailwindCSS", "Strapi"]}
      />
      <div className="py-44 flex flex-col items-center justify-center mx-auto">
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
