import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { forwardRef, useRef, useImperativeHandle } from "react";

const Contact = (props, ref) => {
  let openToWork = useRef();
  return (
    <section
      ref={(item) => (openToWork = item)}
      className=" text-center my-20"
      id="contact"
    >
      <h1 className="font-bebas text-2xl md:text-4xl text-primary">
        Open to work
      </h1>
      <h3 className=" text-5xl md:text-8xl font-bebas">
        Lets Make Something <br /> Awesome
      </h3>
      <div className=" flex gap-5 items-center justify-center">
        <a href="mailto:ashtonfabbt@gmail.com">
          <button className="bg-primary px-7 py-2 text-dark font-semibold hover:bg-transparent hover:text-light border-2 border-primary transition-colors ease-in-out delay-75 mt-10">
            Get in touch
          </button>
        </a>
      </div>
      <div className="socials flex gap-2 items-center justify-center mt-5 mb-4">
        <a href="https://www.linkedin.com/in/faraibauti/" target="_blank">
          <FaLinkedin size={20} className=" hover:text-primary" />
        </a>
        <a href="https://twitter.com/AshtonFabby" target="_blank">
          <FaTwitter size={20} className=" hover:text-primary" />
        </a>
        <a
          href="https://instagram.com/ashtonfabby?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
        >
          <FaInstagram size={20} className=" hover:text-primary" />
        </a>
        <a href="https://github.com/AshtonFabby" target="_blank">
          <FaGithub size={20} className=" hover:text-primary" />
        </a>
      </div>
      <a href="mailto:ashtonfabbt@gmail.com">ashtonfabbt@gamil.com</a>
    </section>
  );
};

export default Contact;
