import Image from "next/image";
import profileImg from "../../public/images/My headshot.jpg";
import DirectToNextPage from "../components/DirectToNextPage";

const About = () => {
  return (
    <main className="container max-h-screen md:mb-2">
      <section className="flex flex-col pb-24 md:pb-8">
        <div className="md:h-[26rem] pt-8 pb-8 px-10 md:px-32 flex flex-col md:flex-row gap-10">
          {/* left */}
          <div className="relative w-full md:w-1/2 min-h-72 md:h-full">
            <Image
              src={profileImg}
              alt="My portrait image"
              fill
              className="object-cover object-top rounded-xl"
              // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* right */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">About me</h1>
            <p>
              I'm a Full-Stack Developer with nearly three years of experience
              building web applications using modern technologies like React,
              Tailwind CSS, Node.js, and Express.js. I focus on creating clean,
              user-friendly interfaces and functional solutions that solve
              real-world problems.
            </p>
            <br />
            <p>
              I’m a creative thinker with a sharp eye for detail and a strong
              sense of logic. I enjoy finding the balance between form and
              function, drawing from my interests in photography, design,
              coding, and mathematics. Whether I'm working solo or as part of a
              team, I enjoy turning ideas into working solutions. If you're
              curious about what I’ve built or want to collaborate, feel free to
              explore my work or reach out!
            </p>
          </div>
        </div>
        <DirectToNextPage label="Let's view my projects" url="/projects" />
      </section>
    </main>
  );
};

export default About;
