import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      site: "Github",
      url: "https://github.com/Dave-n-tech/",
      iconClass: "bi bi-github",
    },
    {
      site: "LinkedIn",
      url: "https://www.linkedin.com/in/david-obadimeji-04595b282/",
      iconClass: "bi bi-linkedin",
    },
    {
      site: "X",
      url: "https://x.com/_KingDavid_01",
      iconClass: "bi bi-twitter",
    },
    {
      site: "Instagram",
      url: "https://www.instagram.com/kingdave_01/",
      iconClass: "bi bi-instagram",
    },
  ];
  return (
    <footer className="w-full bg-slate-950 md:bg-transparent fixed bottom-0 px-10 md:px-12 py-4">
      <div className="w-full space-x-8 flex items-center justify-start">
        {socialLinks.map((link) => {
          return (
            <Link key={link.site} href={link.url}>
              <i className={`${link.iconClass} text-lg opacity-40 hover:opacity-100`}></i>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
