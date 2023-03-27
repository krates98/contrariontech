import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import "./styles.css";

function TransparentNavbar() {
  const [navBackground, setNavBackground] = useState("transparent");

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

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: navBackground }}
    >
      <div className="container">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <Image
            src={logo}
            fluid
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars style={{ color: "white" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              About
            </Nav.Link>
            <Nav.Link href="#services" style={{ color: "white" }}>
              Services
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "white" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default TransparentNavbar;
