"use client";

import gsap from "gsap";
import { MouseEvent, useLayoutEffect, useRef } from "react";

const SvgPage = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const newD = `M 0 300 Q ${x} ${y} 1500 300`;

    if (pathRef.current) {
      pathRef.current.setAttribute("d", newD);
    }

    gsap.to("svg path", {
      attr: { d: newD },
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const d = "M 0 300 Q 750 300 1500 300";

    gsap.to("svg path", {
      attr: { d },
      duration: 1,
      ease: "elastic.out",
    });
  };
  useLayoutEffect(() => {}, []);
  return (
    <div className="flex items-center justify-center">
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <svg viewBox="0 0 1500 600" width="100%" height="600" className="">
          <path
            d="M 0 300 Q 750 300 1500 300"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default SvgPage;
