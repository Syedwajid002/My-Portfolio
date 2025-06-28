import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Logo imports
import reactLogo from "../Assets/logos/react.png";
import node from "../Assets/logos/node.png";
import express from "../Assets/logos/express.png";
import mongo from "../Assets/logos/mongo.png";
import mysql from "../Assets/logos/mysql.png";
import TypeScript from "../Assets/logos/TypeScript.png";
import Tailwind from "../Assets/logos/Tailwind.png";
import reactNative from "../Assets/logos/react-native.png";
import Firebase from "../Assets/logos/Firebase.png";
import Java from "../Assets/logos/Java.png";

const TechStack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const techStack = [
    { logo: reactLogo, name: "React" },
    { logo: node, name: "Node.js" },
    { logo: express, name: "Express" },
    { logo: mongo, name: "MongoDB" },
    { logo: mysql, name: "MySQL" },
    { logo: reactNative, name: "React Native" },
    { logo: TypeScript, name: "TypeScript" },
    { logo: Firebase, name: "Firebase" },
    { logo: Java, name: "Java" },
    { logo: Tailwind, name: "Tailwind CSS" },
  ];

  return (
    <section
      id="Technologies"
      className="w-full py-16 bg-gradient-to-b from-black via-gray-900 to-gray-950"
    >
      <h2
        className="text-3xl font-bold text-center text-white mb-12"
        data-aos="zoom-in"
      >
        My Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-3" />
            <h3 className="text-sm font-medium text-white">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
