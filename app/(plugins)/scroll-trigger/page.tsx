"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const ScrollTriggerPage = () => {
  const page1 = useRef<HTMLDivElement | null>(null);
  const page2 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textSplit = SplitText.create(".what", { type: "chars, words" });

    gsap.from(".box", {
      opacity: 0,
      rotate: 360,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: page1.current,
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        // scrub: true,
        scrub: 3,
      },
    });

    gsap.from(page2.current, {
      opacity: 0,
      x: 800,
      duration: 2,
      scrollTrigger: {
        trigger: page2.current,
        // markers: {
        //   fontSize: "22px",
        //   fontWeight: "bold",
        // },
        start: "top 50%",
        // scrub: true,
      },
      onComplete: () => {
        whatTween.play();
      },
    });

    const whatTween = gsap.from(textSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      paused: true,
      stagger: 0.06,
    });

    // gsap.to(".bigTxt", {
    //   transform: "translate(-100%)",
    //   scrollTrigger: {
    //     trigger: ".bigTxt",
    //     markers: true,
    //     start: "top 40%",
    //     scrub: 2,
    //   },
    // });

    {
      /*
      ==========================================================
      when we try to use pin always trigger parent component
      ==========================================================
   */
    }
    gsap.to(".bigTxt", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#page3", // paren component
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true, // this is stop the page being passed
      },
    });
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div
        id="page1"
        className="w-screen h-screen bg-blue-500 flex items-center justify-center"
      >
        <div ref={page1} className="box w-[300px] h-[300px] bg-red-500"></div>
      </div>

      <div className="w-screen h-screen bg-green-500 flex items-center justify-center">
        <div ref={page2} className="flex flex-col items-end">
          <h1 className="hello text-8xl font-extrabold">Hello World!</h1>
          <p className="what text-4xl font-semibold">What&apos;s up.</p>
        </div>
      </div>

      <div
        id="page3"
        className="w-screen h-screen bg-yellow-500 flex items-center justify-center"
      >
        <div className="flex items-center justify-center">
          <h1 className="bigTxt text-pink-600 text-[35vw] font-extrabold uppercase pl-850 ml-auto -translate-x-16">
            Experience
          </h1>
        </div>
      </div>
      <div
        id="page4"
        className="w-screen h-screen bg-green-500 flex items-center justify-center"
      >
        <div className="box w-[300px] h-[300px] bg-cyan-500"></div>
      </div>
      <div
        id="page5"
        className="w-screen h-screen bg-orange-500 flex items-center justify-center"
      >
        <div className="box w-[300px] h-[300px] bg-emerald-600"></div>
      </div>
      <div
        id="page6"
        className="w-screen h-screen bg-fuchsia-500 flex items-center justify-center"
      >
        <div className="box w-[300px] h-[300px] bg-gray-600"></div>
      </div>
      <div
        id="page7"
        className="w-screen h-screen bg-zinc-500 flex items-center justify-center"
      >
        <div className="box w-[300px] h-[300px] bg-white"></div>
      </div>
    </div>
  );
};

export default ScrollTriggerPage;
