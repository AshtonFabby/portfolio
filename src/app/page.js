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
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  useEffect(() => {
    let name = document.getElementById("name");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let button = document.getElementById("button");

    // let bio = document.getElementById("bio");

    // let services = document.getElementById("services");
    // let contact = document.getElementById("contact");

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(name, { opacity: 1, y: 0, duration: 1, ease: Power3.easeIn })
      .to(title, { opacity: 1, y: 0, duration: 1 })
      .to(description, { opacity: 1, duration: 1 })
      .to(button, { opacity: 1, duration: 0.5 });
  }, []);

  useEffect(() => {
    let work = document.getElementById("work");
    let my_work = document.getElementById("my-work");
    let work_details = document.querySelectorAll("#work-details");

    // console.log(work_title);

    gsap.to(
      my_work,
      {
        opacity: 1,
        duration: 3,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: work,
          start: "top 60%",
          // markers: true,
          // toggleActions: "play reset play reset",
        },
      },
      []
    );

    work_details.forEach((wt) => {
      var tl = new gsap.timeline({
        scrollTrigger: {
          trigger: wt,
          start: "top 60%",
        },
      });
      tl.to(wt.querySelector("#work-title"), {
        opacity: 1,
      })
        .to(wt.querySelector("#owner"), {
          opacity: 0.3,
        })
        .to(wt.querySelector("#work-description"), {
          opacity: 1,
        })
        .to(wt.querySelectorAll("#stack-item"), {
          opacity: 1,
          y: 0,
        })
        .to(wt.querySelector("#image"), {
          opacity: 1,
        });
    });
  });

  useEffect(() => {
    let more = document.getElementById("more");
    let more_text = document.getElementById("more-text");
    let more_link = document.getElementById("more-link");

    const tl = new gsap.timeline({
      scrollTrigger: { trigger: more_text, start: "top center" },
    });

    tl.to(more_text, { opacity: 1, y: 0 }).to(more_link, {
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    let bio = document.getElementById("bio");
    let bio_image = document.getElementById("bio-image");
    let bio_title = document.getElementById("bio-title");
    let bio_description = document.getElementById("bio-description");
    let bio_stack_title = document.getElementById("bio-stack-title");
    let bio_stack_item = document.querySelectorAll("#bio-stack-item");

    const tl = new gsap.timeline({
      delay: 0.5,
      scrollTrigger: { trigger: bio, start: "top 60%" },
    });

    tl.to(bio_title, { opacity: 1, y: 0, duration: 2, ease: Power3.easeInOut })
      .to(bio_description, { opacity: 1 })
      .to(bio_stack_title, { opacity: 1 })
      .to(bio_stack_item, { opacity: 1 })
      .to(bio_image, { opacity: 1 });
  }, []);

  // useEffect(() => {
  //   let services = document.querySelector("#services");
  //   let service_item = document.querySelectorAll("#service-item");

  //   service_item.forEach((si) => {
  //     var tl = new gsap.timeline({
  //       scrollTrigger: {
  //         trigger: si,
  //         start: "top 60%",
  //       },
  //     });

  //     tl.to(service_item, { opacity: 1, duration: 2 });
  //   });
  // });

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
