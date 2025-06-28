import React from "react";
import Footer from "./Footer";
import pic from "../Assets/logos/pic.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#090b14] to-gray-950 min-h-screen text-white">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-white underline transition"
        >
          ← Back to Home
        </a>
      </div>

      {/* Profile & About Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={pic}
            alt="Syed Wajid"
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-white/10 shadow-lg"
          />
        </div>

        {/* Info Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 border-b border-white/20 pb-2">
            About Me
          </h1>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-primary-400">
              🎓 Education
            </h2>
            <p className="text-gray-300">
              <span className="font-medium">
                B.Tech in Information Technology
              </span>
              <br />
              Kakatiya Institute of Technology and Science, Warangal
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-primary-400">
              🛠️ Skills
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 list-disc list-inside text-gray-300">
              <li>React.js</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB / PostgreSQL</li>
              <li>JavaScript / TypeScript / Java</li>
              <li>Tailwind CSS / Bootstrap</li>
              <li>Firebase / WordPress / REST APIs</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary-400">
              📂 Projects
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <a
                  href="https://mjptbcwrdcwomenwargal.ac.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >
                  MJP Women’s College Website (Freelance)
                </a>
              </li>
              <li>
                <a
                  href="https://online-shop-two-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >
                  E-commerce Web App (Self-Learning)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
