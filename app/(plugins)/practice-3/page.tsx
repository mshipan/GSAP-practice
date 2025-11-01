"use client";

import HeroSection from "@/components/plugin-components/practice-3/HeroSection";
import MessageSection from "@/components/plugin-components/practice-3/MessageSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect } from "react";

const Practice3Page = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleSplit = SplitText.create(".title", { type: "chars, words" });
    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero", { opacity: 1, y: 0, ease: "power2.inOut" })
      .to(
        ".title2",
        {
          duration: 1,
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-content",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-content", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <MessageSection />
    </>
  );
};

export default Practice3Page;
