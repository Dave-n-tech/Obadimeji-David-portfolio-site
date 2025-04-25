import Link from "next/link";
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="px-5 md:px-10 py-5 flex flex-row justify-between items-center">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl p-0 text-slate-400">{"<David/>"}</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;