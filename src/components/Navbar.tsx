"use client";

import useColorMode from "@/hooks/useColorMode";
import Link from "next/link";

const NavbarList = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Sobre",
    href: "/about",
  },
  {
    title: "Projetos",
    href: "/projects",
  },
];

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <nav className="flex flex-row justify-between py-4 px-9 fixed top-0 h-fit w-full z-10">
      <div className="font-black text-zinc-900 dark:text-white text-2xl">GS.LAB</div>
      <div className="flex flex-row gap-2">
        {NavbarList.map((value) => (
          <Link
            key={value.href}
            href={value.href}
            className="font-light text-xl text-zinc-900 dark:text-white"
          >
            {value.title}
          </Link>
        ))}
      </div>

      <div
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="flex items-center bg-zinc-200 dark:bg-zinc-800 pl-1 dark:pl-5 
        h-6 w-11 rounded-l-2xl 
        rounded-r-2xl transition-all
        hover:cursor-pointer"
      >
        <div
          className="bg-zinc-50 dark:bg-zinc-900  
        flex items-center justify-center
        h-5 w-5 rounded-full transition-all
        "
        >
          {colorMode === "light" ? (
            <i className="fi fi-br-brightness text-amber-400 text-[0.6rem] leading-[0]"></i>
          ) : (
            <i className="fi fi-br-moon-stars text-violet-400 text-[0.6rem] leading-[0]"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
