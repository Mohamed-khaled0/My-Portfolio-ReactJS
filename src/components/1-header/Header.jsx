/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import "./header.css";

export default function Header({ setActiveSection, activeSection }) {
  const { t, i18n } = useTranslation('header');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const handleNav = (section) => {
    setActiveSection(section);
    setShowMobileMenu(false);
  };

  return (
    <div className="header-centered">
      <div className="pill-header-bar">
        <button className={`pill-tab${activeSection === 'projects' ? ' active' : ''}`} onClick={() => setActiveSection('projects')}><FaCode style={{marginRight: 6}} />{t('projects')}</button>
        <button className={`pill-tab${activeSection === 'certifications' ? ' active' : ''}`} onClick={() => setActiveSection('certifications')}><FaHome style={{marginRight: 6}} />{t('certifications')}</button>
        <button className={`pill-tab${activeSection === 'experience' ? ' active' : ''}`} onClick={() => setActiveSection('experience')}><FaBriefcase style={{marginRight: 6}} />{t('experience')}</button>
        <button className={`pill-tab${activeSection === 'education' ? ' active' : ''}`} onClick={() => setActiveSection('education')}><FaGraduationCap style={{marginRight: 6}} />{t('education')}</button>
        <button className={`pill-tab${activeSection === 'contact' ? ' active' : ''}`} onClick={() => setActiveSection('contact')}><FaEnvelope style={{marginRight: 6}} />{t('contact')}</button>
        <div className="language-switcher">
          <button
            className="lang-button"
            onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
            title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
          >
            <FaGlobe style={{ width: '20px' }} />
            <span style={{ marginLeft: '5px' }}>
              {currentLanguage === 'en' ? 'EN' : 'DE'}
            </span>
          </button>
        </div>
        <button className="menu-toggle" onClick={() => setShowMobileMenu(true)}><FaBars /></button>
      </div>
      {showMobileMenu && (
        <div className="mobile-nav-overlay" onClick={() => setShowMobileMenu(false)}>
          <div className="mobile-nav-menu" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowMobileMenu(false)}><FaTimes /></button>
            <button className={`pill-tab${activeSection === 'projects' ? ' active' : ''}`} onClick={() => handleNav('projects')}><FaCode style={{marginRight: 6}} />{t('projects')}</button>
            <button className={`pill-tab${activeSection === 'certifications' ? ' active' : ''}`} onClick={() => handleNav('certifications')}><FaHome style={{marginRight: 6}} />{t('certifications')}</button>
            <button className={`pill-tab${activeSection === 'experience' ? ' active' : ''}`} onClick={() => handleNav('experience')}><FaBriefcase style={{marginRight: 6}} />{t('experience')}</button>
            <button className={`pill-tab${activeSection === 'education' ? ' active' : ''}`} onClick={() => handleNav('education')}><FaGraduationCap style={{marginRight: 6}} />{t('education')}</button>
            <button className={`pill-tab${activeSection === 'contact' ? ' active' : ''}`} onClick={() => handleNav('contact')}><FaEnvelope style={{marginRight: 6}} />{t('contact')}</button>
            <div className="language-switcher" style={{marginLeft: 12}}>
              <button
                className="lang-button"
                onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
                title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
              >
                <FaGlobe style={{ width: '20px' }} />
                <span style={{ marginLeft: '5px' }}>
                  {currentLanguage === 'en' ? 'EN' : 'DE'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
