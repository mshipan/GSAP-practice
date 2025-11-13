"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect } from "react";

const MessageSection = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const firstMsgSplit = SplitText.create(".msg-wrapper h1", {
      type: "chars, words",
    });

    const secondMsgSplit = SplitText.create(".msg-wrapper h3", {
      type: "chars, words",
    });

    // const paragraphSplit = SplitText.create(".msg-wrapper h3", {
    //   type: "words, lines",
    // });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power3.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".msg-sec",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power3.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".msg-wrapper h3",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-txt-scroll",
        start: "top 60%",
        markers: true,
      },
    });

    revealTl.to(".msg-txt-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });
  }, []);
  return (
    <section className="msg-sec w-screen h-screen bg-amber-900 relative z-20 flex flex-col items-center justify-between py-24">
      <div className="msg-wrapper relative space-y-16 flex flex-col items-center">
        <h1 className="text-8xl font-antonio uppercase font-semibold text-amber-800 max-w-2xl text-center">
          Stir up your fearless past and
        </h1>
        <div
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="msg-txt-scroll bg-amber-600 border-8 border-amber-900 w-fit font-bold leading-none my-0 pb-4 px-2 text-center absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3 z-20"
        >
          <h2 className="text-[6rem] font-antonio uppercase text-amber-900 text-center">
            fuel up
          </h2>
        </div>
        <h3 className="text-8xl font-antonio uppercase max-w-210 text-center text-amber-800 font-bold">
          your future with every gulp of perfect protein
        </h3>
      </div>
      <div>
        <p className="max-w-md text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa
          maxime est! Distinctio ratione laborum temporibus illum hic odio
          corrupti.
        </p>
      </div>
    </section>
  );
};

export default MessageSection;
