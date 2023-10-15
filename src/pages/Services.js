import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGavel,
  faBullseye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Define your modal component
const WhyChooseUsModal = ({ show, onClose }) => {
  // Define the content of your modal here
  const modalContent = (
    <div className="modal-content why-choose-us-modal">
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          <strong>Experience:</strong> With years of experience in the crypto
          industry, we understand the nuances of the market. We've successfully
          supported numerous projects, from ICOs to DeFi platforms and
          exchanges.
        </li>
        <li>
          <strong>Proven Results:</strong> Our track record speaks for itself.
          We've helped projects achieve market success and build strong, lasting
          communities.
        </li>
        <li>
          <strong>Custom Solutions:</strong> Every project is unique. We tailor
          our services to your specific needs, ensuring you receive the support
          that aligns with your goals.
        </li>
      </ul>
    </div>
  );

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      {modalContent}
    </div>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="services">
      <div className="services-container">
        <h2 className="services-heading">Services We Offer</h2>
        <div className="services container">
          <div className="service-box">
            <div className="service-icon">
              <FontAwesomeIcon color="green" icon={faUser} size="4x" />
            </div>
            <div className="service-details">
              <h3>Market Making</h3>
              <p>
                Our team of experienced market makers leverage cutting-edge
                technology and market insights to provide liquidity and optimize
                trading for your crypto project.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FontAwesomeIcon color="green" icon={faGlobe} size="4x" />
            </div>
            <div className="service-details ">
              <h3>Exchange Listing</h3>
              <p>
                Whether you're a new project looking to gain exposure or an
                established token seeking broader market access, our expertise
                ensures a seamless listing process.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FontAwesomeIcon color="green" icon={faBullseye} size="4x" />
            </div>
            <div className="service-details">
              <h3>Strategic Marketing</h3>
              <p>
                In a crowded crypto landscape, effective marketing is key to
                standing out. From social media campaigns to community building,
                we've got you covered.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FontAwesomeIcon color="green" icon={faGavel} size="4x" />
            </div>
            <div className="service-details">
              <h3>Legal Advisory</h3>
              <p>
                Our legal experts specialize in crypto and blockchain
                regulations. We provide guidance to ensure your project complies
                with the ever-evolving legal framework.
              </p>
            </div>
          </div>
        </div>

        {/* "Why choose us?" button */}
        <button
          onClick={openModal}
          className="cta-button"
          style={{ marginTop: "40px" }}
        >
          Why Choose us?
        </button>

        {/* Render the modal based on showModal state */}
        <WhyChooseUsModal show={showModal} onClose={closeModal} />
      </div>
    </section>
  );
};

export default Services;
