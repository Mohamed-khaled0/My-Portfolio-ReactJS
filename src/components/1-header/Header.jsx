/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaLanguage } from "react-icons/fa"; 
import { MdBuild } from "react-icons/md"; 
import { useTranslation } from 'react-i18next'; 
import { FaGlobe } from 'react-icons/fa'; 
import "./header.css";

export default function Header() {
  const { t, i18n } = useTranslation('header'); 
  let [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); 

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !document.querySelector(".modal").contains(event.target) && !event.target.classList.contains("menu")) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div>
      <header className="flex">
        <button
          className="menu icon-menu flex"
          onClick={() => setShowModal(true)}
          aria-label={t('menuButton')}
        >
          {/* Optionally, include an icon or text for the menu button */}
        </button>
        <div />

        <nav>
          <ul className="flex">
            <li><a href="#main"><FaHome /> {t('home')}</a></li>
            <li><a href="#projects"><FaCode /> {t('projects')}</a></li>
            <li><a href="#skills"><MdBuild /> {t('skills')}</a></li>
            <li><a href="#experience"><FaBriefcase /> {t('experience')}</a></li>
            <li><a href="#education"><FaGraduationCap /> {t('education')}</a></li>
            <li><a href="#contact"><FaEnvelope /> {t('contact')}</a></li>
            <li>
              <div className="language-switcher">
                <button
                  className="lang-button"
                  onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
                  title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
                >
                  <FaLanguage  />
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="mode flex"
          aria-label={t('modeToggle')}
        >
          {theme === "dark" ? (
            <span className="icon-moon-o"> </span>
          ) : (
            <span className="icon-sun"> </span>
          )}
        </button>

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
              <li><a href="#main" onClick={() => setShowModal(false)}>{t('home')}</a></li>
              <li><a href="#projects" onClick={() => setShowModal(false)}>{t('projects')}</a></li>
              <li><a href="#skills" onClick={() => setShowModal(false)}>{t('skills')}</a></li>
              <li><a href="#experience" onClick={() => setShowModal(false)}>{t('experience')}</a></li>
              <li><a href="#education" onClick={() => setShowModal(false)}>{t('education')}</a></li>
              <li><a href="#contact" onClick={() => setShowModal(false)}>{t('contact')}</a></li>
              <li>
                <div className="language-switcher">
                  <button
                    className="lang-button"
                    onClick={() => changeLanguage(currentLanguage === 'en' ? 'de' : 'en')}
                    title={currentLanguage === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
                  >
                    <FaGlobe className="changeLanguageIcon" style={{ color: 'var(--blue)' }} />
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
