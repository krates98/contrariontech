import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import DemoRequestModal from "../pages/DemoRequestModal"; // Import the DemoRequestModal component
import mmplans from "../images/mmplans.pdf";
import "./styles.css";

function TransparentNavbar() {
  const [navBackground, setNavBackground] = useState("transparent");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedOption, setSelectedOption] = useState("Request A Demo"); // Track the selected option in the modal

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavBackground("black");
      } else {
        setNavBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to open the modal with a specific option selected
  const openModal = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: navBackground }}
      className="navbar-custom"
    >
      <div className="container">
        <Navbar.Brand href="/">
          <Image
            src={logo}
            fluid
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#consulting">Consulting</Nav.Link>
            <Nav.Link onClick={() => openModal("Request A Demo")}>
              Request A Demo
            </Nav.Link>
            <Nav.Link onClick={() => openModal("Contact Us")}>Contact</Nav.Link>
            <Nav.Link href={mmplans}>Our Plans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>

      {/* Render the modal based on showModal state and selectedOption */}
      <DemoRequestModal
        show={showModal}
        selectedOption={selectedOption} // Pass the selected option as a prop
        onClose={() => setShowModal(false)}
      />
    </Navbar>
  );
}

export default TransparentNavbar;
