import React from "react";
import Home from "./Home";
import Services from "./Services";
import Projects from "../components/Projects";
import AboutUs from "./AboutUs";

const Structure = () => {
  return (
    <div>
      <Home /> <Projects />
      <Services /> <AboutUs />
    </div>
  );
};

export default Structure;
