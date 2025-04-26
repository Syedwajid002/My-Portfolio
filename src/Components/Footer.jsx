import React from "react";
import ig from "../Assets/logos/ig.png";
import git from "../Assets/logos/git.png";
import x from "../Assets/logos/x.jpg";
import Linkedin from "../Assets/logos/linkedin.png";
const Footer = () => {
  return (
    <div className="bg-[#090b14] w-full ">
      <footer className="bg-[#090b14] md:flex-row flex flex-col justify-around items-center text-white py-10">
        <div className="flex flex-col mx-auto text-center md:mb-0 mb-5">
          <h1 className="text-2xl font-bold">Connect with me </h1>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/syed-wajid002/" target="blank">
              <img src={Linkedin} alt="X" className="w-10" />
            </a>
            <a href="https://github.com/Syedwajid002" target="blank">
              <img src={git} alt="X" className="w-10" />
            </a>
            <a href="https://www.instagram.com/syed_wajid16/" target="blank">
              <img src={ig} alt="Instagram" className="w-10" />
            </a>
            <a href="https://x.com/syedwajid002" target="blank">
              <img src={x} alt="X" className="w-10" />
            </a>
          </div>
        </div>
        <div className="mx-auto text-center">
          <p className="text-sm p-1">© 2025 Syed Wajid. All rights reserved.</p>
          <p className="text-sm p-1">Designed and Developed by Syed Wajid</p>
          <p className="text-sm p-1">
            <b>Contact:</b> +91 7330786910
          </p>
          <p className="text-sm p-1">
            <b>Email:</b> syedwajid002@gmail.com
          </p>
          <p className="text-sm p-1">
            <b>Location:</b> Hyderabad, India
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
