"use client";

import gsap from "gsap";
import { MouseEvent, useRef } from "react";

const CustomCursorPage = () => {
  const mouseRef = useRef(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const f = e.nativeEvent.clientX;
    const g = e.nativeEvent.clientY;
    const cursorSize = 40;
    gsap.to(mouseRef.current, {
      x: f - cursorSize / 2,
      y: g - cursorSize / 2,
      duration: 1,
      ease: "back.out",
    });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-blue-500 w-screen h-screen"
    >
      <div
        ref={mouseRef}
        className="cursar size-20 fixed z-50 rounded-full bg-green-900/70"
      ></div>
    </div>
  );
};

export default CustomCursorPage;
