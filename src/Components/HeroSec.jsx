import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-6 md:px-12 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-primary-500">Syed Wajid</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Software Developer specializing in MERN Stack, Java, and React Native.
          I build scalable, user-focused solutions from scratch and love solving
          complex problems with clean code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Wajid Resume.pdf"
            download
            className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-md text-sm font-medium transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>

          <a
            href=""
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white hover:text-primary-400 transition"
          >
            <Link to="/wajidsProjects">View Projects →</Link>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
