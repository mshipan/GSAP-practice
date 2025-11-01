import Link from "next/link";

const PluginNav = () => {
  return (
    <div className="fixed top-0 left-0 bg-black px-20 mx-auto w-full z-40">
      <ul className="flex items-center gap-6 py-4">
        <li>
          <Link href="/scroll-trigger" className="hover:text-green-500">
            Scroll Trigger
          </Link>
        </li>
        <li>
          <Link href="/svg" className="hover:text-green-500">
            SVG
          </Link>
        </li>
        <li>
          <Link href="/custom-cursor" className="hover:text-green-500">
            Custom Cursor
          </Link>
        </li>
        <li>
          <Link href="/practice-3" className="hover:text-green-500">
            Practice 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PluginNav;
