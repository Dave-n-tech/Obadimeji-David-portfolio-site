import React from "react";
import TrustViewImg from "../../public/images/projectScrenshots/TrustView.png";
import QuizziaImg from "../../public/images/projectScrenshots/Quizzia.png";
import CgpaCalculatorImg from "../../public/images/projectScrenshots/Cgpa Calculator.png";
import FIntrackImg from "../../public/images/projectScrenshots/Fintrack.png"
import ProjectCard from "../components/ProjectCard";
import { StaticImageData } from "next/image";
import DirectToNextPage from "../components/DirectToNextPage";

// type Project = {
//   id: number;
//   name: String;
//   link: String;
//   image: StaticImageData;
//   description: String;
//   languages: String[];
// };

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: "Fintrack",
      link: "https://personal-budget-tracker-rust.vercel.app/",
      image: FIntrackImg,
      description: "An intuitive and user-friendly budget tracking applcation to help users effectively manage their finances and set budgets for spending",
      languages: [
        "Typescript",
        "React",
        "Tailwind",
        "Appwrite",
        "Vite"
      ]
    },
    {
      id: 2,
      name: "TrustView",
      link: "https://trust-view.vercel.app/",
      image: TrustViewImg,
      description:
        "A review management system for companies to collect reviews from customers and for users to submit and view reviews by other users.",
      languages: [
        "Javascript",
        "React",
        "Tailwind",
        "Nodejs",
        "Express",
        "MySql",
        "Vite",
      ],
    },
    {
      id: 3,
      name: "Quizzia",
      link: "https://quizzia-app.vercel.app/",
      image: QuizziaImg,
      description: "An exciting trivia game built using open trivia api",
      languages: ["Javascript", "React", "Html/Css", "Vite"],
    },
    {
      id: 4,
      name: "Lasu CGPA Calculator",
      link: "https://cgpa-calculator-ten.vercel.app/",
      image: CgpaCalculatorImg,
      description: "CGPA calculator for Lagos state university",
      languages: ["Javascript", "React", "Html/Css", "Vite"],
    },
  ];

  return (
    <main className="container min-h-screen px-2 pt-8 pb-20 md:px-36">
      <h1 className="text-5xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {
          projects.map((project) => {
            return (
              <ProjectCard key={project.id} projectProp={project}/>
            )
          })
        }
      </div>
      <DirectToNextPage label="Contact me" url="/contact" />
    </main>
  );
};

export default Projects;
