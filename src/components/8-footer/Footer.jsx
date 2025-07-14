import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mohamed Khaled | Portfolio</h3>
            <p className="footer-text">© 2025 Mohamed Khaled. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;