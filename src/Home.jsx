import React from "react";
import Navbar from "./Components/Navbar";
import HeroSec from "./Components/HeroSec";
import TechStack from "./Components/TechStack";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <TechStack />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
