"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect } from "react";

gsap.registerPlugin(SplitText);

const Practice2Page = () => {
  useLayoutEffect(() => {
    const textSplit = SplitText.create(".testText", { type: "chars, words" });
    const sampleText = SplitText.create(".sample", {
      type: "chars, words",
    });

    const sampleText2 = SplitText.create(".sample2", {
      type: "chars, lines",
    });

    const sampleTween = gsap.from(sampleText.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.9,
      paused: true,
      onComplete: () => {
        sampleTween2.play();
      },
    });

    const sampleTween2 = gsap.from(sampleText2.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.9,
      paused: true,
    });

    gsap.from(textSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.9,
      color: "red",
      onComplete: () => {
        sampleTween.play();
      },
    });
  }, []);

  return (
    <div className="min-w-screen h-screen border-4 border-white">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <h1 className="testText uppercase text-7xl font-extrabold">mojito</h1>
        <p className="sample text-5xl font-bold uppercase absolute bottom-10 left-4">
          Sample text
        </p>
        <p className="sample2 text-xl font-bold absolute bottom-10 right-4 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          quaerat repellendus exercitationem debitis deserunt adipisci quam.
          Laudantium eligendi at explicabo.
        </p>
      </div>
    </div>
  );
};

export default Practice2Page;
