"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect } from "react";

const HeroSection = () => {
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
    <section className="hero-content bg-rose-100 w-screen h-dvh text-black">
      <div className="hero size-full flex flex-col items-center justify-center opacity-0 translate-y-10">
        <h1 className="title uppercase text-[7.5rem] text-amber-950 font-antonio font-bold">
          freaking delicious
        </h1>
        <div
          style={{
            clipPath: "polygon(46% 0, 46% 0, 45% 100%, 45% 100%)",
          }}
          className="title2 bg-amber-600 border-8 border-rose-100 -rotate-2"
        >
          <h2 className="uppercase text-[7.5rem] text-rose-100 font-antonio font-bold leading-none my-0 pb-4 px-2 text-center">
            protein + caffeine
          </h2>
        </div>
        <p className="text-lg capitalize text-amber-950 max-w-2xl text-center my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quod
          soluta nam ipsa laudantium recusandae officiis tempora nobis
          accusantium! Illo?
        </p>
        <button className="uppercase text-lg bg-amber-500 text-amber-950 py-4 px-8 rounded-full font-semibold font-antonio cursor-pointer">
          chug a spylt
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
