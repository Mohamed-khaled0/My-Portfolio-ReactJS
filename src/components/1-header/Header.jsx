import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import "./header.css";

export default function Header({ setActiveSection, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide header on project details page
  if (location.pathname.startsWith('/project/')) {
    return null;
  }

  const navItems = [
    { key: 'home', icon: FaHome, label: 'Home' },
    { key: 'about', icon: FaUser, label: 'About' },
    { key: 'projects', icon: FaCode, label: 'Projects' },
    { key: 'contact', icon: FaEnvelope, label: 'Contact' }
  ];

  const handleNavClick = (sectionKey) => {
    setActiveSection(sectionKey);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Bjorn Melin | Portfolio</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map(({ key, icon: Icon, label }) => (
                <li key={key} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === key ? 'active' : ''}`}
                    onClick={() => handleNavClick(key)}
                    aria-label={label}
                  >
                    <Icon className="nav-icon" />
                    <span className="nav-text">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}