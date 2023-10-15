import React, { useState, useEffect } from "react";

const DemoRequestModal = ({ show, onClose, selectedOption }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSelectedOption, setCurrentSelectedOption] =
    useState(selectedOption);

  const handleOptionChange = (e) => {
    setCurrentSelectedOption(e.target.value);
  };

  useEffect(() => {
    setCurrentSelectedOption(selectedOption);
  }, [selectedOption]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with your actual submission logic)
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    onClose();
    setIsSubmitted(false);
  };

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleCloseModal}>
          &times;
        </span>
        <h2>Contact US</h2>
        <form onSubmit={handleSubmit}>
          <div className="dropdown">
            <select
              name="requestType"
              onChange={handleOptionChange}
              value={currentSelectedOption}
            >
              <option value="Request A Demo">Request A Demo</option>
              <option value="Contact Us">Contact Us</option>
              <option value="Talk To Our CEO">Talk To Our CEO</option>
              <option value="Talk To Our Experts">Talk To Our Experts</option>
            </select>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
          {isSubmitted && (
            <p className="success-message">Your message has been sent!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default DemoRequestModal;
