import React from "react";
import Footer from "./Footer";
import pic from "../Assets/logos/pic.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-[#090b14] min-h-screen text-white p-8">
      <a
        href="/"
        className="mt-8 text-sm text-gray-300 hover:text-white underline transition"
      >
        ← Home
      </a>
      <div className="max-w-4xl mx-auto mb-10 md:flex flex-row items-center justify-between">
        <div>
          <img src={pic} alt="Profile" className="w-76 rounded-full" />
        </div>
        <div className="mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-6 border-b pb-2">About Me</h1>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
            <p className="text-gray-300">
              B.Tech in Information Technology <br />
              From Kakatiya Institute of Technology and Science, Warangal
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🛠️ Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React.js</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, PostgreSQL</li>
              <li>JavaScript, Java, TypeScript</li>
              <li>TailwindCSS, Bootstrap</li>
              <li>Firebase, WordPress, APIs</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">📂 Projects</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <a
                  href="https://mjptbcwrdcwomenwargal.ac.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >
                  MJP Women's College Website (Freelance)
                </a>
              </li>
              <li>
                <a
                  href="https://online-shop-two-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >
                  E-commerce Web App (Self Learning)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <Footer className="mt-10" />
    </div>
  );
};

export default About;
