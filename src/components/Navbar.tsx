"use client";

import useColorMode from "@/hooks/useColorMode";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <nav className="flex flex-row justify-between py-2 px-3 fixed top-0 h-fit w-full">
      <div className="font-black text-zinc-900 dark:text-white text-2xl">GS.LAB</div>
      <div
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="flex items-center bg-zinc-200 dark:bg-zinc-800 pl-1 dark:pl-5 
        h-6 w-11 rounded-l-2xl 
        rounded-r-2xl transition-all
        hover:cursor-pointer"
      >
        <div
          className="bg-white dark:bg-zinc-900  
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
