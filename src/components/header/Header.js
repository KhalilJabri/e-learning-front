import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      {/* Logo */}
      <div className="logo">
        <a href="/">CRTek-up</a>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          {/* <li><a href="/about">About</a></li> */}
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Profile and Buttons */}
      <div className="header-actions">
        {/* <a href="/login" className="btn-login">Login</a>
        <a href="/signup" className="btn-signup">Sign Up</a> */}
        {/* <div className="profile-menu">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-pic"
          />
        </div> */}
          <p >salah</p>
      </div>
    </header>
  );
}

export default Header;
