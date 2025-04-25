import React from "react";
import TrustViewImg from "../../public/images/projectScrenshots/TrustView.png";
import QuizziaImg from "../../public/images/projectScrenshots/Quizzia.png";
import CgpaCalculatorImg from "../../public/images/projectScrenshots/Cgpa Calculator.png";
import ExpenseTrackerImg from "../../public/images/projectScrenshots/Expense Tracker.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const projects = [
    {
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
      name: "Quizzia",
      link: "https://quizzia-app.vercel.app/",
      image: QuizziaImg,
      description: "An exciting trivia game built using open trivia api",
      languages: ["Javascript", "React", "Html/Css", "Vite"],
    },
    {
      name: "Lasu CGPA Calculator",
      link: "https://cgpa-calculator-ten.vercel.app/",
      image: CgpaCalculatorImg,
      description: "CGPA calculator for Lagos state university",
      languages: ["Javascript", "React", "Html/Css", "Vite"],
    },
    {
      name: "Expense Tracker",
      link: "https://expense-tracker-sigma-lemon-14.vercel.app/",
      image: ExpenseTrackerImg,
      description: "An simple expense tracking app",
      languages: ["Javascript", "React", "Html/Css", "Vite"],
    },
  ];

  return (
    <main className="container h-screen px-8 md:px-36 py-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="w-full p-4 flex flex-col gap-4 md:flex-row border border-teal-600">
        {/* card */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
};

export default Projects;
