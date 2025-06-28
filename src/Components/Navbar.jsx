import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sign from "../Assets/Sign.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-black/70 via-[#090b14]/90 to-transparent backdrop-blur-sm text-white fixed top-0 w-full z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Sign} alt="logo" className="w-20" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-gray-300 text-sm">
          <li className="hover:text-white transition">
            <Link to="/about-Wajid">About</Link>
          </li>
          <li className="hover:text-white transition">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="hover:text-white transition">
            <Link to="/wajidsProjects">Projects</Link>
          </li>
        </ul>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <Link
            to="/Contact-Wajid"
            className="inline-flex items-center bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-white font-medium px-5 py-2 rounded-md text-sm backdrop-blur-sm transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger (Mobile only) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#090b14] px-6 py-6">
          <ul className="flex flex-col justify-center gap-4 text-gray-300 text-sm">
            <li className="hover:text-white transition">
              <Link to="/about-Wajid" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/resume" onClick={() => setIsOpen(false)}>
                Resume
              </Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/wajidsProjects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/Contact-Wajid" onClick={() => setIsOpen(false)}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
