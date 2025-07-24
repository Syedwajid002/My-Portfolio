import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  User,
  CheckCircle,
  Download,
} from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Resume = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-20 md:px-20">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-white underline transition"
        >
          ← Back to Home
        </a>
      </div>
      {/* Heading */}
      <motion.header
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Syed Wajid Pasha
        </h1>
        <p className="text-gray-400 text-lg">Software Developer</p>
      </motion.header>

      {/* Summary */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <User size={20} /> Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Proficient in Java and the MERN stack with a solid foundation in
          problem-solving, building responsive applications, and managing
          real-world deployments. Comfortable working in dynamic team
          environments and passionate about scalable and modern software
          solutions.
        </p>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Code size={20} /> Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Each category below is the same as before */}
          {[
            {
              title: "Languages",
              items: ["Java", "JavaScript", "TypeScript", "HTML"],
            },
            {
              title: "Frameworks",
              items: ["React Native", "Node.js", "Express.js"],
            },
            {
              title: "Libraries & Tools",
              items: ["React.js", "Tailwind CSS", "Material UI", "Git"],
            },
            {
              title: "Databases",
              items: ["MongoDB", "SQL", "Firebase"],
            },
            {
              title: "Cloud & DevOps",
              items: ["AWS (EC2, S3)", "Firestore"],
            },
            {
              title: "Soft Skills",
              items: ["Teamwork", "Communication", "Problem-Solving"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                {section.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase size={20} /> Experience
        </h2>
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="font-bold text-lg">Web Developer – HVRA Agency</h3>
          <p className="text-gray-400 text-sm mb-2">Nov 2024 – Present</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
            <li>
              Designed and developed the entire UI from scratch using React and
              TypeScript.
            </li>
            <li>
              Implemented SEO best practices, integrated Google Forms, and added
              smooth animations using Framer Motion.
            </li>
            <li>
              Led the development process end-to-end, aligning the build with
              brand vision and business goals.
            </li>
            <li>
              <a
                href="https://hvrasolutions.com/"
                className="text-primary-500 underline"
                target="_blank"
                rel="noreferrer"
              >
                Live: hvrasolutions.com
              </a>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5 }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <GraduationCap size={20} /> Education
        </h2>
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="font-bold text-lg">
            B.Tech in Information Technology
          </h3>
          <p className="text-gray-400 text-sm mb-1">
            KITS Warangal, 2022 – 2025
          </p>
          <p className="text-sm text-gray-300">
            CGPA: 7.67 (till 7th semester)
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle size={20} /> Projects
        </h2>

        <div className="space-y-6">
          {/* Project 1 */}
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-lg">MJP College Website</h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
              <li>Built with React, Tailwind CSS & Firebase.</li>
              <li>Responsive design for students, faculty & alumni.</li>
              <li>
                <a
                  href="https://mjptbcwrdcwomenwargal.ac.in/home"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Visit Project →
                </a>
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-lg">E-Commerce Platform (MERN)</h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
              <li>Used MongoDB, Express, React, Node.js (MERN Stack).</li>
              <li>JWT auth, product browsing, cart & order flow.</li>
              <li>Deployed on Render (backend) & Vercel (frontend).</li>
              <li>
                <a
                  href="https://online-shop-two-gamma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Visit Project →
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Syedwajid002/E-Commerce-using-MERN"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Download Resume Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="/wajid's Resume.pdf"
          download
          className="inline-flex items-center bg-primary-500  hover:bg-white/20 border border-white/10 text-white font-medium px-6 py-3 rounded-md transition duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </motion.div>
    </main>
  );
};

export default Resume;
