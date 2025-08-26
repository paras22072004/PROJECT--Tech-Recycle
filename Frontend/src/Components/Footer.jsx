import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>EcoTrack</h2>
          <p>Track your waste, earn rewards & save the planet 🌍</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/user">UserDashboard</a></li>
            <li><a href="/admin">AdminDashboard</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@ecotrack.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoTrack. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
