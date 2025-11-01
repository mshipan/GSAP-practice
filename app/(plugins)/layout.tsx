import PluginNav from "@/components/plugin-components/PluginNav";
import { ReactNode } from "react";

const PluginLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="min-h-screen w-full px-6 overflow-x-hidden">
      <PluginNav />
      {children}
    </div>
  );
};

export default PluginLayout;
