import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div className="back-height">
      <div className="center-text center-box">
        <h1 className="animate__animated animate__slideInLeft">
          Market <span>Making</span>
        </h1>
        <p className="animate__animated animate__slideInRight">
          Contrarian Technologies is a Crypto focused services provider helping
          crypto projects to achieve their short and long term goals.
        </p>
      </div>
      <div class="lights-container">
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </div>
  );
};

export default Home;
