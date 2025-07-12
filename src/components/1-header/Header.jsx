import React, { useEffect, useState } from "react";
import { FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaGlobe, FaCertificate } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./header.css";
import { useLocation } from 'react-router-dom';

export default function Header({ setActiveSection, activeSection }) {
  const { t, i18n } = useTranslation('header');
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const location = useLocation();

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  // Hide header on project details page
  if (location.pathname.startsWith('/project/')) {
    return null;
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const navItems = [
    { key: 'home', icon: FaUser, label: t('home') },
    { key: 'projects', icon: FaCode, label: t('projects') },
    { key: 'skills', icon: FaCertificate, label: t('skills') },
    { key: 'certifications', icon: FaCertificate, label: t('certifications') },
    { key: 'experience', icon: FaBriefcase, label: t('experience') },
    { key: 'education', icon: FaGraduationCap, label: t('education') },
    { key: 'contact', icon: FaEnvelope, label: t('contact') }
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <nav className="nav-pills">
          {navItems.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              className={`nav-pill ${activeSection === key ? 'active' : ''}`}
              onClick={() => setActiveSection(key)}
              aria-label={`Navigate to ${label}`}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
          
          <div className="language-toggle">
            <button
              className="lang-button"
              onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
              title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
              aria-label={`Switch language to ${currentLanguage === 'en' ? 'German' : 'English'}`}
            >
              <FaGlobe />
              <span>{currentLanguage === 'en' ? 'EN' : 'DE'}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}