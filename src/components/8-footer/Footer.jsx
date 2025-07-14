import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-text">© 2025 Bjorn Melin. All rights reserved.</p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-nav">
              <a href="#home">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-social">
              <a href="https://github.com/bjorn-melin" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/bjorn-melin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/bjorn_melin" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:bjorn.melin@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;