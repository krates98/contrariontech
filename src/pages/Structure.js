import React from "react";
import Home from "./Home";
import Services from "./Services";
import Projects from "../components/Projects";
import AboutUs from "./AboutUs";
import Consulting from "./Consulting";
import Testimonials from "./Testimonials";

const Structure = () => {
  return (
    <div>
      <Home /> <Projects />
      <Services /> <AboutUs /> <Consulting /> <Testimonials />
    </div>
  );
};

export default Structure;
