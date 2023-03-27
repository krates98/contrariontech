import React from "react";
import Home from "./Home";
import Services from "./Services";
import Projects from "../components/Projects";

const Structure = () => {
  return (
    <div>
      <Home /> <Projects />
      <Services />
    </div>
  );
};

export default Structure;
