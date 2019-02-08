import React from 'react';
import { Link } from 'react-router-dom';
import "./Navabr.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <Link to="/" className="navbar-brand">
          <div className="nav-title">
            Thomson Thomas
          </div>
        </Link>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        <Link to="/portfolio"
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
        <Link to="/discover"
          className={(window.location.pathname === "/discover") ? "nav-link active" : "nav-link"}>Discover</Link>
        <Link to="/search"
          className={(window.location.pathname === "/search") ? "nav-link active" : "nav-link"}>Search</Link>
        <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
      </div>
    </div>
  )
}

export default Navbar;