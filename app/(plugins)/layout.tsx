"use client";
import PluginNav from "@/components/plugin-components/PluginNav";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ReactNode, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollSmoother);

const PluginLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  useLayoutEffect(() => {
    ScrollSmoother.create({ smooth: 3, effects: true });
  }, []);
  return (
    <div className="min-h-screen w-full px-6 overflow-x-hidden">
      <PluginNav />
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </div>
  );
};

export default PluginLayout;
