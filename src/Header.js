import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://meri.et/backend/uploads/images/setting/1704703731659bb6f350a67.png"
          alt="Meri Podcast Logo"
        />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#programs">PROGRAMS</a>
          </li>
          <li>
            <a href="#articles">ARTICLES</a>
          </li>
          <li>
            <a href="#blogs">BLOGS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#login">LOGIN</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
