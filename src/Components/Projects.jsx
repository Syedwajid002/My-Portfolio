import React from "react";
import mjp from "../Assets/logos/mjp.png";
import Ecom from "../Assets/logos/Ecom.png";
import hvra from "../Assets/logos/hvra.png";
import nifa from "../Assets/logos/nifa.png";
const projects = [
  {
    title: "High Value Recruitment Agency",
    description:
      "I built a professional website for HVRA, working directly with the CEO to deliver a clean, responsive, and conversion-focused platform. The site was developed using React.js,TypeScript,Tailwind CSS and Framer Motion. It showcases the agency’s services, job listings, and contact workflows tailored for international recruitment.",
    link: "https://hvrasolutions.com", // Replace with actual link
    image: hvra, // Replace with actual image import reference
  },
  {
    title: "MJP Women's College Wargal",
    description:
      "I collaborated on building the official website for MJP Women’s Government College as a freelance project. I handled design and development using React.js and Firebase for real-time updates and secure data handling. Tailwind CSS was used for a clean and responsive UI.",
    link: "https://mjptbcwrdcwomenwargal.ac.in/home",
    image: mjp,
  },
  {
    title: "E-Commerce Web Application",
    description:
      "I independently built a full-stack e-commerce web application using React.js, Node.js, Express, and MongoDB. It includes user auth, product management, shopping cart, and order processing, giving me hands-on experience in scalable, production-ready application development.",
    link: "https://online-shop-two-gamma.vercel.app/",
    image: Ecom,
  },
  {
    title: "Nifa's Portfolio Website",
    description:
      "I designed and developed a sleek and responsive personal portfolio website for Nifa, showcasing her skills, projects, and experience in a professional layout. Built with React.js and Tailwind CSS, the site features smooth animations, section-based navigation, and is fully optimized for mobile and desktop viewing. Hosted on Vercel for fast global performance.",
    link: "https://nifa-s-portfolio.vercel.app/",
    image: nifa, // Replace with actual image reference
  },
];

const Projects = () => {
  return (
    <div className="bg-[#090b14] min-h-screen py-16 px-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Recent Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl w-full h-64 object-cover"
              />
            </a>
            <div className="p-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-semibold mb-3 hover:underline underline-offset-4 transition">
                  {project.title}
                </h3>
              </a>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-white underline transition"
        >
          ← Back
        </a>
      </div>
    </div>
  );
};

export default Projects;
