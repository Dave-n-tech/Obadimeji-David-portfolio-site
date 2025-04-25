"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import TrustViewImg from "../../public/images/projectScrenshots/TrustView.png";

type Project = {
  id: number;
  name: String;
  link: String;
  image: StaticImageData;
  description: String;
  languages: String[];
};

type Props = {
  projectProp: Project;
};

const ProjectCard = ({ projectProp }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, link, image, description, languages } = projectProp;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full md:w-1/2  min-h-80 rounded-lg bg-slate-950"
    >
      <Image
        src={image}
        alt={`${name} Screenshot`}
        fill
        className={`object-cover object-center rounded-lg ${
          isHovered ? "opacity-20" : "hover:opacity-100"
        }`}
      />

      <div
        className={`absolute bottom-6 opacity-0 left-3 transition-[opacity] duration-150 ease-in ${
          isHovered && "opacity-100"
        }`}
      >
        <h1 className="text-2xl font-bold mb-3">{name}</h1>
        <p className="text-[0.85rem] md:text-[14px] mb-5">
          {description}
        </p>
        <ul className="flex flex-row flex-wrap gap-4">
          {
            languages.map((language, index) => {
              return <li key={index} className="bg-gray-600 py-1 px-4 rounded-3xl text-[0.75rem]">
              {language}
            </li>
            })
          }
          {/* <li className="bg-gray-600 py-1 px-4 rounded-3xl text-[0.75rem]">
            Html
          </li>
          <li className="bg-gray-600 py-1 px-4 rounded-3xl text-[0.75rem]">
            css
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
