import Link from "next/link";

const FooterList = [
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

function Footer() {
  return (
    <footer>
      <div
        className="w-full h-fit py-10 px-9 gap-10 bg-zinc-900 dark:bg-zinc-50 
        flex flex-col items-start justify-center
        transition-all"
      >
        <div className="w-full flex flex-row justify-between items-center gap-6">
          <div className="flex flex-row gap-1 items-center">
            <h1 className="text-5xl font-semibold text-zinc-50 dark:text-zinc-900 leading-[0] transition-all">
              gabrielsaintzlab@gmail.com
            </h1>
            <Link
              className=" flex leading-[0] hover:text-indigo-600 hover:dark:text-indigo-600 text-zinc-50 dark:text-zinc-900 transition-all"
              href={""}
            >
              <i className="fi fi-br-arrow-small-right text-5xl leading-[0]"></i>
            </Link>
          </div>
          <div className="flex flex-row gap-4 leading-[0] text-zinc-50 dark:text-zinc-900 ">
            <Link
              className="hover:text-indigo-600 leading-[0] text-4xl hover:dark:text-indigo-600 transition-all"
              href={""}
            >
              <i className="fi fi-brands-github "></i>
            </Link>
            <Link
              className="hover:text-indigo-600  leading-[0] text-4xl hover:dark:text-indigo-600 transition-all"
              href={""}
            >
              <i className="fi fi-brands-linkedin "></i>
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {FooterList.map((value) => (
            <Link
              key={value.href}
              href={value.href}
              className="font-light text-2xl text-zinc-50 dark:text-zinc-900"
            >
              {value.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
