import React from "react";
import "./project.css";
import CountUp from "react-countup";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container padCard">
        <div className="row">
          <div className="col-lg-4">
            <div className="project-card">
              <h2>Traded volume</h2>
              <CountUp
                className="countNum"
                start={1}
                end={150}
                duration={4}
                suffix="M+"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="project-card">
              <h2>Countries supported</h2>
              <CountUp
                className="countNum"
                start={1}
                end={50}
                duration={4}
                suffix="+"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="project-card">
              <h2>Institutional clients</h2>
              <CountUp
                className="countNum"
                start={1}
                end={500}
                duration={4}
                suffix="+"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="return-card">
              <h2>Return generated for investors worldwide</h2>
              <CountUp
                className="countNum"
                start={1}
                end={500}
                duration={4}
                prefix="$"
                suffix="M+"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
