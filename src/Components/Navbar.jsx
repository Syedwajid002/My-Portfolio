import React from "react";
import ProjectsDD from "./ProjectsDD";
import Sign from "../Assets/Sign.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#090b14] text-white w-full">
      <nav className="flex md:flex-row md:justify-between justify-around items-center p-1  ">
        {/* Logo */}
        <div className="flex justify-center md:justify-start md:ml-16">
          <img src={Sign} alt="logo" className="w-24" />
        </div>

        {/* Links */}
        <ul className="flex flex-col md:flex-row items-center gap-4 text-gray-400 mt-4 md:mt-0 hidden md:flex">
          <li>
            <ProjectsDD />
          </li>
          <li className="py-2 md:py-0 cursor-pointer hover:text-white transition">
            <Link to="/about-Wajid">About</Link>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-4 md:mt-0 md:mr-12">
          <button className="bg-[#00cb2c] text-white px-4 py-2 rounded-md hover:bg-[#00cb2c] hover:text-black transition duration-300 ease-in-out text-sm font-medium">
            <Link to="/Contact-Wajid">Contact Me</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
