import React from "react";
import pic from "../Assets/logos/pic.jpg";

const Card = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl sm:text-2xl text-gray-200 font-light leading-relaxed">
          “I'm{" "}
          <span className="text-primary-500 font-semibold">Syed Wajid</span>, a
          skilled Software Developer focused on creating efficient, scalable
          applications. I specialize in the MERN stack and React Native to
          deliver robust solutions across web and mobile.”
        </p>

        <div className="mt-6 inline-flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl transition hover:scale-105 hover:bg-white/10">
          <img
            src={pic}
            alt="Syed Wajid"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-white font-medium tracking-wide text-base">
            Syed Wajid Pasha
          </span>
        </div>
      </div>
    </section>
  );
};

export default Card;
