"use client";
import Lenis from "@studio-freight/lenis";
import HeroSection from "./components/hero";
import WorkSection from "./components/work";
import Bio from "./components/bio";
import Services from "./components/services";
import Contact from "./components/contact";
import { useEffect } from "react";

import { gsap, Power3, ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      lenis.scrollTo(this.getAttribute("href"));
    });
  });
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    let name = document.getElementById("name");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let button = document.getElementById("button");

    //get ids for bio, work, services, contact
    // let bio = document.getElementById("bio");
    // let work = document.getElementById("work");
    // let services = document.getElementById("services");
    // let contact = document.getElementById("contact");

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(name, { opacity: 1, y: 0, duration: 1, ease: Power3.easeIn });
    tl.to(title, { opacity: 1, y: 0, duration: 1 });
    tl.to(description, { opacity: 1, duration: 1 });
    tl.to(button, { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <>
      <main className="">
        <HeroSection />
        <WorkSection />
        <Bio />
        <Services />
        <Contact />
        <footer className=" font-bebas text-light opacity-30 text-center text-xl my-20">
          designed & developed by ashton fabby
        </footer>
      </main>
    </>
  );
}
