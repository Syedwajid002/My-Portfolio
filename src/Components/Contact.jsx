import React from "react";
import ig from "../Assets/logos/ig.png";
import linkedin from "../Assets/logos/linkedin.png";
import x from "../Assets/logos/x.jpg";
const Contact = () => {
  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-[#090b14] text-white">
      <div className="flex flex-col md:flex-row border-2 border-gray-700 rounded-2xl p-10 gap-10 max-w-4xl w-full bg-[#0f111b]">
        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold border-b-2 border-green-400 pb-2 mb-6">
            Contact Me
          </h3>
          <p className="mb-2">
            📞 Call:{" "}
            <a
              href="tel:+917330786910"
              className="text-green-400 hover:underline"
            >
              +91 7330786910
            </a>
          </p>
          <p className="mb-4">
            📧 Email:{" "}
            <a
              href="mailto:syedwajid002@gmail.com"
              className="text-green-400 hover:underline"
            >
              syedwajid002@gmail.com
            </a>
          </p>

          <div className="flex gap-5 mt-4">
            <a
              href="https://www.linkedin.com/in/syed-wajid002/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/syed_wajid16/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ig}
                alt="Instagram"
                className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://x.com/syedwajid002"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={x}
                alt="X (Twitter)"
                className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Center Divider */}
        <div className="hidden md:flex items-center justify-center text-gray-500 text-2xl">
          OR
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center">
          <a
            href="https://calendly.com/texsky24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-xl transition">
              Schedule a Meeting
            </button>
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center md:hidden">
          <a
            href="/"
            className=" text-sm text-gray-300 hover:text-white underline transition"
          >
            ← Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
