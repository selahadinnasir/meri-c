import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="contact-section">
        <i
          className="fas fa-envelope "
          style={{ color: "red", marginRight: "5px" }}
        ></i>{" "}
        Email: info@meri.et
        <div className="afterEmail">
          <span className="contact-item">Guest Suggestions </span>
          <span className="devider">|</span>
          <span className="contact-item">Make Partnership With Us</span>
          <span className="devider">|</span>
          <span className="contact-item">The Podcast </span>
        </div>
      </div>
      <div className="social-icons">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-tiktok"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default Intro;
