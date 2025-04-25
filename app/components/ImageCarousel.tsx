"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import htmlImg from "../../public/html-1.svg";
import cssImg from "../../public/css-3.svg";
import jsImg from "../../public/javascript-logo-svgrepo-com.svg";
import tsImg from "../../public/typescript.svg";
import nextImg from "../../public/next-js.svg";
import prismaImg from "../../public/prisma-svgrepo-com.svg";
import reactImg from "../../public/react-2.svg";
import expressImg from "../../public/expressjs-icon.svg";
import tailwindImg from "../../public/tailwind-css-2.svg";
import nodejsImg from "../../public/nodejs-icon.svg";

const images = [
  { name: "html", src: htmlImg, alt: "html logo" },
  { name: "css", src: cssImg, alt: "css logo" },
  { name: "js", src: jsImg, alt: "js logo" },
  { name: "ts", src: tsImg, alt: "ts logo" },
  { name: "react", src: reactImg, alt: "react logo" },
  { name: "next", src: nextImg, alt: "next logo" },
  { name: "tailwind", src: tailwindImg, alt: "tailwind logo" },
  { name: "nodejs", src: nodejsImg, alt: "nodejs logo" },
  { name: "express", src: expressImg, alt: "express logo" },
  { name: "prisma", src: prismaImg, alt: "prisma logo" },
];

const ImageCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="px-2 border-l border-l-teal-300 border-r border-r-teal-300 relative max-w-72 md:max-w-2xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Track */}
      <div
        ref={carouselRef}
        className={`flex gap-6 py-4 w-max ${!isHovered ? "animate-slide" : ""}`}
      >
        {[...images, ...images].map((image, index) => (
          <Image
            key={`${image.name}-${index}`}
            src={image.src}
            width={50}
            height={50}
            alt={image.alt}
            className="transition hover:scale-110 duration-300"
          />
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
