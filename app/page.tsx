import ImageCarousel from "./components/ImageCarousel";
import DirectToNextPage from "./components/DirectToNextPage";

export default function Home() {
  return (
    <main className="container overflow-hidden px-6 pt-4">
      <section className="flex flex-col items-center mx-auto pt-8 pb-5">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4">
          OBADIMEJI DAVID
        </h1>
        <p className="text-lg md:text-3xl font-semibold text-teal-500 tracking-widest md:tracking-wider">
          FULLSTACK SOFTWARE ENGINEER
        </p>

        <div className="mt-12 mb-5 flex flex-col items-center">
          <h2 className="text-gray-500 text-xl tracking-wider md:tracking-widest mb-4">
            TECHNOLOGIES
          </h2>
          <ImageCarousel />
        </div>
        <DirectToNextPage label="About me" url="/about" />
      </section>
    </main>
  );
}
