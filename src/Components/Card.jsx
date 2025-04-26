import React from "react";
import pic from "../Assets/logos/pic.jpg";
const Card = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-2xl   text-center font-lights text-gray-800 w-2/3">
          “I'm syed wajid a skilled Software developer with a focus on creating
          efficient and high-quality applications. My proficiency in the MERN
          stack and React Native delivers reliable solutions for both web and
          mobile platforms.”
        </p>
        <div className="border rounded-xl p-1.5 mt-2 flex items-center justify-around gap-2 hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
          <img src={pic} alt="profile" className="w-10 h-10 rounded-3xl" />
          <h2 className="text-black aldrich">Syed Wajid</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
