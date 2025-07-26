import React, { useState } from 'react';
import './Navbar.css';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">gradnext</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Links */}
      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#coaching">1:1 Coaching Program</a></li>
        <li><a href="#cohort">Consulting Cohort 101</a></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <a href="#book">Book a 45-min Session</a>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><a href="#mentorship">Consulting Mentorship</a></li>
              <li><a href="#mock">Consulting Mock Interview</a></li>
              <li><a href="#cv-review">Consulting CV Review</a></li>
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-right">
        <button className="casebuddy-btn">CaseBuddy</button>
        <FaUserCircle size={22} className="user-icon" />
        <span className="currency">INR</span>
      </div>
    </nav>
  );
};

export default Navbar;
