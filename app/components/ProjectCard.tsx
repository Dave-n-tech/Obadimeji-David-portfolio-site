'use client'
import Image from "next/image";
import { useState } from "react";
import TrustViewImg from "../../public/images/projectScrenshots/TrustView.png";

const ProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative md:w-2xl min-h-80 bg-black border border-amber-500"
    >
      <Image
        src={TrustViewImg}
        alt="Screenshot"
        fill
        className={`object-cover object-center ${
          isHovered ? "opacity-20" : "hover:opacity-100"
        }`}
      />
      <div className="absolute bottom-3 left-3">
        <h1 className="text-2xl font-bold mb-3">Project Title</h1>
        <p className="text-[0.85rem] md:text-[1rem] mb-5">
          Project Description Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aperiam officia ipsam repellendus itaque
        </p>
        <ul className="flex flex-row gap-4">
          <li className="bg-gray-600 py-1 px-4 rounded-3xl text-[0.75rem]">
            Html
          </li>
          <li className="bg-gray-600 py-1 px-4 rounded-3xl text-[0.75rem]">
            css
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
