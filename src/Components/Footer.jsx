import React from "react";
import ig from "../Assets/logos/ig.png";
import git from "../Assets/logos/git.png";
import x from "../Assets/logos/x.jpg";
import Linkedin from "../Assets/logos/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-[#090b14] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Social Links */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/syed-wajid002/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Syedwajid002"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={git} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/syed_wajid16/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={ig} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/syedwajid002"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={x} alt="X (Twitter)" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>© 2025 Syed Wajid. All rights reserved.</p>
          <p>Made with ❤️ by Syed Wajid</p>
          <p>
            <b>Phone Number:</b> +91 7330786910
          </p>
          <p>
            <b>Email:</b> syedwajid002@gmail.com
          </p>
          <p>
            <b>Location:</b> Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
