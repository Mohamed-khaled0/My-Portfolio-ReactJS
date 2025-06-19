/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaLanguage } from "react-icons/fa"; 
import { MdBuild } from "react-icons/md"; 
import { useTranslation } from 'react-i18next'; 
import { FaGlobe } from 'react-icons/fa'; 
import "./header.css";

export default function Header({ setActiveSection, activeSection }) {
  const { t, i18n } = useTranslation('header'); 
  let [showModal, setShowModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); 

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !document.querySelector('.modal').contains(event.target) && !event.target.classList.contains('menu')) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div>
      <header className="flex header-centered">
        <button
          className="menu icon-menu flex"
          onClick={() => setShowModal(true)}
          aria-label={t('menuButton')}
        />
        <div />
        <nav>
          <ul className="flex">
            <li><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>{t('projects')}</button></li>
            <li><button className={activeSection === 'certifications' ? 'active' : ''} onClick={() => setActiveSection('certifications')}>{t('certifications')}</button></li>
            <li><button className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')}>{t('experience')}</button></li>
            <li><button className={activeSection === 'education' ? 'active' : ''} onClick={() => setActiveSection('education')}>{t('education')}</button></li>
            <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>{t('contact')}</button></li>
            <li>
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
            </li>
          </ul>
        </nav>
        {showModal && (
          <div className="fixed">
            <ul className="modal">
              <li>
                <button
                  className="icon-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close Menu"
                ></button>
              </li>
              <li><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>{t('projects')}</button></li>
              <li><button className={activeSection === 'certifications' ? 'active' : ''} onClick={() => setActiveSection('certifications')}>{t('certifications')}</button></li>
              <li><button className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')}>{t('experience')}</button></li>
              <li><button className={activeSection === 'education' ? 'active' : ''} onClick={() => setActiveSection('education')}>{t('education')}</button></li>
              <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>{t('contact')}</button></li>
              <li>
                <div className="language-switcher">
                  <button
                    className="lang-button"
                    onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
                    title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
                  >
                    <FaGlobe style={{ width: '22px' }} />
                    <span style={{ marginLeft: '5px' }}>
                      {currentLanguage === 'en' ? 'EN' : 'DE'}
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
