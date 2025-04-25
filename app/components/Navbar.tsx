"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`text-2xl h-screen fixed top-0 ${
          menuOpen ? "right-0" : "-right-96"
        } bg-slate-200 text-black flex md:items-center px-32 py-16 z-10 transition-[right] duration-200 ease-in md:transition-none md:h-0 md:right-0 md:text-lg md:bg-transparent md:text-slate-400 md:px-0 md:py-0 md:relative`}
      >
        <ul
          className={`flex flex-col items-center space-y-6 
      md:space-y-0 md:flex-row md:justify-center md:space-x-4`}
        >
          {navlinks.map((link) => {
            return (
              <Link key={link.href} href={link.href}>
                <li
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                  className={`cursor-pointer hover:underline ${
                    pathname === link.href && "text-teal-500 font-semibold"
                  }`}
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Hamburger */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${menuOpen && "open"} w-8 h-8 z-50 flex md:hidden flex-col gap-1.5 items-center justify-center cursor-pointer`}
      >
        <span className={`hamburger-top ${menuOpen ? "bg-teal-500" : "bg-white"}`}></span>
        <span className={`hamburger-middle ${menuOpen ? "bg-teal-500" : "bg-white"}`}></span>
        <span className={`hamburger-bottom ${menuOpen ? "bg-teal-500" : "bg-white"}`}></span>
      </div>
    </>
  );
};

export default Navbar;
