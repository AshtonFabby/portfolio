import LottieAnimation from "./lottie_animation";

const Services = () => {
  return (
    <section className=" container mx-auto mb-20 mt-28" id="services">
      <h1 className=" font-bebas text-5xl text-center">
        What i can help you with
      </h1>

      <div className=" lg:flex justify-between items-center mt-10">
        <div className=" space-y-4 mt-5 lg:mt-0 md:w-8/12">
          <div id="service-items" className=" grid md:grid-cols-2 gap-5">
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                Website Development
              </h3>
              <p className="text-center text-sm">
                Front End dev,
                <br /> React, WordPress
              </p>
            </span>
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                Mobile app Development
              </h3>
              <p className="text-center text-sm">
                Hybrid native android/ <br /> ios applications
              </p>
            </span>
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                API Development
              </h3>
              <p className="text-center text-sm">
                Backends for front end <br /> and mobile apps
              </p>
            </span>
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                System Administration
              </h3>
              <p className="text-center text-sm">
                Windows, Linux system <br /> maintenance
              </p>
            </span>
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                UI/UX Design
              </h3>
              <p className="text-center text-sm">
                mobile apps and websites <br /> visual design
              </p>
            </span>
            <span
              id="service-item"
              className="p-10 hover:bg-[#272727] hover:text-light duration-500 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-center">
                Graphics Design
              </h3>
              <p className="text-center text-sm">
                social media product <br /> graphics design
              </p>
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
};

export default Services;
