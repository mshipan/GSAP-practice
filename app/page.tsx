"use client";

import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const box14Tween = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    // to
    gsap.to(".box1", { x: 200 });

    // from
    gsap.from(".box2", {
      x: 200,

      duration: 3,
      ease: "power2.out",
    });

    // svg
    gsap.from(".box3", { x: 400, fill: "blue", duration: 3 });

    // fromto
    gsap.fromTo(
      ".box4",
      { x: 0, fill: "red" },
      { x: 200, fill: "green", duration: 3 }
    );

    // set
    gsap.set(".box5", { x: 200, fill: "red" });

    // to array
    gsap.to([".box6", ".box7"], { x: 200 });

    //target variable

    const target = document.querySelector(".box8");

    gsap.to(target, {
      x: 200,
      rotation: 360,
      duration: 2,
      borderRadius: "50%",
      ease: "sine.inOut",
    });
    // staggers
    gsap.to(".box9", { x: 200, stagger: 1, ease: "bounce.out", duration: 2 });

    // advanced staggers
    gsap.to(".box10", {
      x: 200,
      stagger: {
        each: 0.1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",
        repeat: -1,
      },
      ease: "bounce.out",
      duration: 2,
      rotate: 360,
      borderRadius: "50%",
    });

    // timeline

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".box11", { x: 200, duration: 1, ease: "power2.inOut" });
    tl.from(".box12", { x: 200, duration: 1, delay: 1, ease: "power2.inOut" });
    tl.to(".box13", { x: 200, duration: 1, delay: 1, ease: "power2.inOut" });

    box14Tween.current = gsap.to(".box14", {
      x: 200,
      duration: 2,
      borderRadius: "50%",
      rotate: 360,
      paused: true,
      ease: "power2.inOut",
    });

    gsap.to(".box1", {
      x: 200,
      duration: 1,
      onStart: () => console.log("Animation started ✅"),
      onUpdate: () => console.log("Animation is running..."),
      onComplete: () => {
        box14Tween?.current?.play();
        console.log("End");
      },
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    });

    tl1.to(".box1", { x: 200 });
    tl1.to(".box2", { y: 100 });
    tl1.to(".box3", { rotate: 360 });
  }, []);
  return (
    <>
      <ul className="flex items-center gap-8">
        <li className="text-3xl font-semibold">
          <Link href="/practice-2">Practice 2</Link>
        </li>
        <li className="text-3xl font-semibold">
          <Link href="/scroll-trigger">Scroll Trigger</Link>
        </li>
      </ul>

      <div className="text-white min-w-screen h-screen border-4 border-white grid grid-cols-3">
        <div>
          <div className="box1 size-20 bg-green-500 flex items-center justify-center">
            box 1
          </div>

          <div className="box2 size-20 bg-red-500 flex items-center justify-center">
            box 2
          </div>

          {/* if image color changing animation then use svg because svg has fill property */}
          <div className="flex flex-col items-center justify-center w-fit">
            <h1>box 3</h1>
            <svg className="box3 w-20 h-20">
              <rect width="100%" height="100%" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center w-fit">
            <h1>box 4</h1>

            <svg className="box4 w-20 h-20">
              <rect width="100%" height="100%" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center w-fit">
            <h1>box 5</h1>
            <svg className="box5 w-20 h-20">
              <rect width="100%" height="100%" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center w-fit">
            <h1>box 6 & 7</h1>
            <svg className="box6 w-20 h-20 mb-1">
              <rect width="100%" height="100%" fill="blue" />
            </svg>

            <svg className="box7 w-20 h-20">
              <rect width="100%" height="100%" fill="green" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center w-fit">
            <h1>box 8</h1>
            <svg className="box8 w-20 h-20">
              <rect width="100%" height="100%" fill="white" />
            </svg>
          </div>
        </div>

        <div>
          <h1>Staggers</h1>
          <div>
            <div>
              <h1>boxs 9th</h1>
              <div className="box9 size-20 bg-green-500 mb-1"></div>
              <div className="box9 size-20 bg-green-500 mb-1"></div>
              <div className="box9 size-20 bg-green-500 mb-1"></div>
              <div className="box9 size-20 bg-green-500"></div>
            </div>

            <div>
              <h1>boxs 10th</h1>
              <div className="box10 size-20 bg-red-500 mb-1"></div>
              <div className="box10 size-20 bg-red-500 mb-1"></div>
              <div className="box10 size-20 bg-red-500 mb-1"></div>
              <div className="box10 size-20 bg-red-500 mb-1"></div>
              <div className="box10 size-20 bg-red-500"></div>
            </div>
          </div>
        </div>

        <div>
          <h1>Timeline</h1>
          <div>
            <h1>boxs 11 12 13th</h1>
            <div className="box11 size-20 bg-sky-500 mb-1"></div>
            <div className="box12 size-20 bg-sky-500 mb-1"></div>
            <div className="box13 size-20 bg-sky-500 mb-1"></div>
          </div>
          <h1 className="mt-3">Control</h1>
          <div>
            <h1>box 14th</h1>
            <div className="box14 size-20 bg-orange-500 mb-1"></div>
            <div className="flex items-center gap-3 mt-2">
              <h1
                className="play cursor-pointer"
                onClick={() => box14Tween.current?.play()}
              >
                Play
              </h1>
              <h1
                className="pause cursor-pointer"
                onClick={() => box14Tween.current?.pause()}
              >
                Pause
              </h1>
              <h1
                className="resume cursor-pointer"
                onClick={() => box14Tween.current?.resume()}
              >
                Resume
              </h1>
              <h1
                className="reverse cursor-pointer"
                onClick={() => box14Tween.current?.reverse()}
              >
                Reverse
              </h1>
              <h1
                className="restart cursor-pointer"
                onClick={() => box14Tween.current?.restart()}
              >
                Restart
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
