import React from "react";
import { Link } from "react-router-dom";
const HeroSec = () => {
  return (
    <div className="flex flex-col h-screen items-center justidy-center text-center bg-[#090b14] text-white">
      <h1 className="text-4xl font-bold mb-4 mt-20">Hello, I'm Wajid</h1>
      <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
      <p className="text-lg text-gray-400 mb-4 text-center max-w-xl">
        I'm a passionate Software developer with a knack for creating stunning
        softwares.
      </p>
      <button className="bg-[#00cb2c] text-white font-bold px-6 py-2 rounded-md hover:bg-[#00cb2c] hover:text-black transition duration-300 ease-in-out text-sm font-medium">
        <Link to="/wajidsProjects">View Projects</Link>
      </button>
    </div>
  );
};

export default HeroSec;
