import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center px-8 py-3 navbar">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center text-white text-base md:text-2xl font-bold"
        >
          <FaMapMarkerAlt className="text-sm md:text-2xl" />
          <span className="ml-2">Countries Map</span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          target="_blank"
          href="https://github.com/Jtendersen"
          className="flex items-center text-white ml-5 text-sm md:text-base hover:underline"
        >
          <FaGithub className="text-sm md:text-2xl" />
          <span className="ml-1">GitHub</span>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/juanmanueltierno-developer/"
          className="flex items-center text-white ml-5 text-sm md:text-base hover:underline"
        >
          <FaLinkedin className="text-sm md:text-2xl" />
          <span className="ml-1">LinkedIn</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
