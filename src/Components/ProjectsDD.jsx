import { useState } from "react";

export default function ProjectsDD() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2  text-grey-400 rounded-md hover:bg-gray-700  hover:text-gray-50 focus:outline-none"
      >
        Projects
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg p-6">
          <a
            href="https://online-shop-two-gamma.vercel.app/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-between"
            target="_blank"
            rel="noreferrer"
          >
            E-commerce
            <a
              href="https://online-shop-two-gamma.vercel.app/"
              className="text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Site
            </a>
            <a
              href="https://github.com/Syedwajid002/E-Commerce-using-MERN"
              className="text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </a>
          <a
            href="https://mjptbcwrdcwomenwargal.ac.in/home"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-between"
            target="_blank"
            rel="noreferrer"
          >
            College Website
            <a
              href="https://mjptbcwrdcwomenwargal.ac.in/home"
              className="text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Site
            </a>
            <a
              href="https://github.com/Syedwajid002/Govt-College-Website-Freelance-"
              className="text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Click again on Projects to close this dailogue
          </p>
        </div>
      )}
    </div>
  );
}
