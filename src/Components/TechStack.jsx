import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const techStack = [
    { logo: reactLogo, name: "React" },
    { logo: node, name: "Node.js" },
    { logo: express, name: "Express" },
    { logo: mongo, name: "MongoDB", textSize: "text-sm" },
    { logo: mysql, name: "MySQL" },
    { logo: reactNative, name: "React Native" },
    { logo: TypeScript, name: "TypeScript" },
    { logo: Firebase, name: "Firebase" },
    { logo: Java, name: "Java" },
    { logo: Tailwind, name: "Tailwind CSS" },
  ];

  return (
    <div className="mt-10 bg-white w-full pt-10" id="Technologies">
      <h1
        className="aldrich text-2xl text-black text-center mb-4 "
        data-aos="zoom-in"
      >
        My Tech Stack
      </h1>

      <div className="flex lg:grid-cols-2 items-center md:flex-row md:justify-between text-black">
        <div className="w-full">
          <div
            className="grid md:grid-cols-4 grid-cols-2 mt-5 md:mt-0 p-5 gap-4"
            data-aos="zoom-in"
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="border rounded-xl p-3 flex items-center justify-around gap-2 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out"
              >
                <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                <h2
                  className={`text-black aldrich ${
                    tech.textSize ? tech.textSize : "text-base"
                  }`}
                >
                  {tech.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
