import React from "react";
import mjp from "../Assets/logos/mjp.png";
import Ecom from "../Assets/logos/Ecom.png";
const Projects = () => {
  return (
    <div className="bg-[#090b14] min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-4xl text-center mt-10 mb-6 border-b-2 border-[#00cb2c] inline-block p-2">
        My Recent Projects
      </h2>

      <div className="flex flex-col items-center">
        <ul className="space-y-4">
          <li className="grid md:grid-cols-2 border border-white rounded-xl px-10 py-3 text-center hover:border-[#00cb2c] transition duration-300">
            <div className="justify-center items-center flex flex-col">
              <a
                href="https://mjptbcwrdcwomenwargal.ac.in/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-3xl font-bold mb-4">
                  MJP Womens College Wargal
                </h3>
                <p className="text-sm p-4">
                  I collaborated on building the official website for MJP
                  Women’s Government College as a freelance project, taking
                  responsibility for both design and development. The frontend
                  was developed using React.js, while the backend was powered by
                  Firebase, ensuring real-time updates and secure data handling.
                  We focused on creating a clean, responsive UI with Tailwind
                  CSS, delivering a functional, user-friendly platform that
                  showcases the college’s vision, departments, faculty, and
                  student resources.
                </p>
              </a>
            </div>
            <div className="md:p-4  rounded-lg">
              <img src={mjp} alt="" className="rounded-lg" />
            </div>
          </li>

          <li className="grid md:grid-cols-2 border border-white rounded-xl px-10 py-3 text-center hover:border-[#00cb2c] transition duration-300">
            <div className="justify-center items-center flex flex-col">
              <a
                href="https://mjptbcwrdcwomenwargal.ac.in/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-3xl font-bold mb-4">
                  E-Commerce Web Application
                </h3>
                <p className="text-sm p-4">
                  I independently built a full-stack e-commerce web application
                  to gain a deep, hands-on understanding of how different
                  technologies and frameworks work together in real-world
                  projects. Through this project, I explored the complete
                  development lifecycle — from building the frontend using
                  React.js to creating a RESTful backend with Node.js and
                  Express.js, and managing data using MongoDB. I focused on
                  implementing key functionalities like user authentication,
                  product management, shopping cart, and order processing, which
                  helped me truly understand the interaction between frontend
                  and backend systems. This project greatly strengthened my
                  skills in API development, state management, database
                  integration, and responsive design, giving me practical
                  knowledge of building scalable, production-ready applications.
                </p>
              </a>
            </div>
            <div className="md:p-4  rounded-lg">
              <img src={Ecom} alt="" className="rounded-lg" />
            </div>
          </li>
        </ul>

        <a
          href="/"
          className="mt-8 text-sm text-gray-300 hover:text-white underline transition"
        >
          ← Back
        </a>
      </div>
    </div>
  );
};

export default Projects;
