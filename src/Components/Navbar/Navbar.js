import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
          <div className="nav-title">

            Thomson Thomas
          </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        <Link to="/" id="about"
          className={window.location.pathname === "/" ? "active-page" : "nav-link"}>About</Link>
        <Link to="/portfolio" id="portfolio"
          className={(window.location.pathname === "/portfolio") ? "active-page" : "nav-link"}>Portfolio</Link>
        <Link to="/contact" id="contact"
          className={(window.location.pathname === "/contact") ? "active-page" : "nav-link"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;