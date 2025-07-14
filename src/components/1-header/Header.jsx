import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCog, FaCode, FaBriefcase, FaCertificate, FaEnvelope, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import "./header.css";

export default function Header({ setActiveSection, activeSection }) {
  const { t, i18n } = useTranslation('header');
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const navItems = [
    { key: 'home', icon: FaHome, label: t('home') },
    { key: 'about', icon: FaUser, label: 'About' },
    { key: 'skills', icon: FaCog, label: t('skills') },
    { key: 'projects', icon: FaCode, label: t('projects') },
    { key: 'experience', icon: FaBriefcase, label: t('experience') },
    { key: 'certifications', icon: FaCertificate, label: t('certifications') },
    { key: 'contact', icon: FaEnvelope, label: t('contact') }
  ];

  const handleNavClick = (sectionKey) => {
    setActiveSection(sectionKey);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">Mohamed Khaled</span>
            <span className="logo-subtitle">Cloud Engineer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                className={`nav-item glass-nav ${activeSection === key ? 'active' : ''}`}
                onClick={() => handleNavClick(key)}
                aria-label={`Navigate to ${label}`}
              >
                <Icon className="nav-icon" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="header-actions">
            <div className="lang-toggle glass">
              <button
                className={currentLanguage === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={currentLanguage === 'de' ? 'active' : ''}
                onClick={() => changeLanguage('de')}
                aria-label="Switch to German"
              >
                DE
              </button>
            </div>

            <button
              className="mobile-menu-toggle glass"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile glass ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              className={`nav-item-mobile ${activeSection === key ? 'active' : ''}`}
              onClick={() => handleNavClick(key)}
            >
              <Icon className="nav-icon" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}