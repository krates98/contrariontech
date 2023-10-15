import React, { useState } from "react";
import ceoImage from "../images/our-ceo.png";
import expertImage from "../images/expert.jpg";
import DemoRequestModal from "../pages/DemoRequestModal"; // Import the DemoRequestModal component

const Consulting = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  // Function to open the modal with a specific option selected
  const openModal = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  return (
    <section id="consulting" className="consulting-section">
      <div className="container">
        <h2 className="consulting-heading">Consulting</h2>

        <div className="ceo-experts-container">
          <div className="ceo-section">
            <div className="ceo-image">
              <img src={ceoImage} alt="CEO" />
            </div>
            <div className="ceo-cta">
              <h3>Our CEO</h3>
              <p>
                In the dynamic world of business, leadership is not just about
                steering the ship but about setting its course, anticipating the
                tides, and navigating with foresight. At the helm of our
                organization stands Manu Singh, a visionary leader whose
                dedication, innovative spirit, and commitment have been
                instrumental in propelling us to new heights. While we could
                delve deep into the intricate nuances of his achievements, we
                believe the trajectory of our organization speaks volumes about
                his capabilities.
              </p>
              <button
                onClick={() => openModal("Talk To Our CEO")} // Match the capitalization
                className="cta-button"
              >
                Talk To Our CEO
              </button>
            </div>
          </div>

          <div className="experts-section">
            <div className="expert-image">
              <img src={expertImage} alt="Expert" />
            </div>
            <div className="experts-cta">
              <h3>Our Experts</h3>
              <p>
                In the intricate tapestry of business consulting, expertise is
                the thread that brings clarity to complexity. At the heart of
                our consulting division are our experts, a distinguished group
                of individuals whose depth of knowledge and vast experience
                stand as beacons of guidance. Each conversation with them is not
                just an exchange of information, but a step closer to refined
                strategies and actionable insights. Their wisdom has been honed
                through years of navigating challenges, foreseeing
                opportunities, and crafting solutions that resonate.
              </p>
              <button
                onClick={() => openModal("Talk To Our Experts")} // Match the capitalization
                className="cta-button"
              >
                Talk To Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal based on showModal state and selectedOption */}
      <DemoRequestModal
        show={showModal}
        selectedOption={selectedOption}
        onClose={() => {
          setSelectedOption(""); // Reset selectedOption when the modal is closed
          setShowModal(false);
        }}
      />
    </section>
  );
};

export default Consulting;
