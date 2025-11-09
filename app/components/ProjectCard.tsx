"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Project = {
  id: number;
  name: String;
  link: Url;
  image: StaticImageData;
  description: String;
  languages: String[];
};

type Props = {
  projectProp: Project;
};

const ProjectCard = ({ projectProp }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const { name, link, image, description, languages, id } = projectProp;

  // Detect screen size (true if md and above)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);

    handleResize(); // set initial value
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const showInfo = isLargeScreen ? isHovered : true;
  const imageOpacity = isLargeScreen
    ? isHovered
      ? "opacity-100"
      : "opacity-0"
    : "opacity-80";

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => isLargeScreen && setIsHovered(true)}
        onMouseLeave={() => isLargeScreen && setIsHovered(false)}
        className="relative min-h-80 rounded-lg bg-slate-950 cursor-pointer"
      >
        <Image
          src={image}
          alt={`${name} Screenshot`}
          fill
          className={`${id === 1 ? "object-center" : "object-left"} object-cover rounded-lg z-0`}
        />

        {/* Gradient Overlay */}
        <div
          className={`${imageOpacity} absolute inset-0 bg-gradient-to-b from-white/50 via-black/70 to-black/80 z-10`}
        />

        <div
          className={`absolute bottom-6 left-3 right-3 z-20 transition-opacity duration-200 ${
            showInfo ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-2xl font-bold mb-3 text-white">
            {name}
            <i className="bi bi-box-arrow-up-right ml-2 text-lg text-white hover:text-teal-500"></i>
          </h1>
          <p className="text-[0.85rem] md:text-[14px] mb-5 text-gray-200">
            {description}
          </p>
          <ul className="flex flex-row flex-wrap gap-2">
            {languages.map((language, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-600 text-white py-1 px-4 rounded-3xl text-[0.75rem]"
                >
                  {language}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
