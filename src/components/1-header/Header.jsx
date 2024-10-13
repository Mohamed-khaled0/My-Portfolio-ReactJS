/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa"; // Importing icons
import { MdBuild } from "react-icons/md"; 
import { useTranslation } from 'react-i18next'; // Import useTranslation
import "./header.css";

export default function Header() {
  const { t } = useTranslation('header'); // Specify 'header' namespace
  let [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  // Close modal if clicking outside of it
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

  return (
    <div>
      <header className="flex">
        <button
          className="menu icon-menu flex"
          onClick={() => {
            setShowModal(true);
          }}
          aria-label={t('menuButton')} // Optional: For accessibility
        >
          {/* Optionally, include an icon or text for the menu button */}
        </button>
        <div />

        <nav>
          <ul className="flex">
            <li>
              <a href="#main">
                <FaHome /> {t('home')}
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaCode /> {t('projects')}
              </a>
            </li>
            <li>
              <a href="#skills">
                <MdBuild /> {t('skills')}
              </a>
            </li>
            <li>
              <a href="#experience">
                <FaBriefcase /> {t('experience')}
              </a>
            </li>
            <li>
              <a href="#education">
                <FaGraduationCap /> {t('education')}
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaEnvelope /> {t('contact')}
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="mode flex"
          aria-label={t('modeToggle')} // Optional: For accessibility
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
                  onClick={() => {
                    setShowModal(false);
                  }}
                  aria-label="Close Menu" // Optional: You can also translate this
                ></button>
              </li>
              <li>
                <a href="#main" onClick={() => setShowModal(false)}>{t('home')}</a>
              </li>
              <li>
                <a href="#projects" onClick={() => setShowModal(false)}>{t('projects')}</a>
              </li>
              <li>
                <a href="#skills" onClick={() => setShowModal(false)}>{t('skills')}</a>
              </li>
              <li>
                <a href="#experience" onClick={() => setShowModal(false)}>{t('experience')}</a>
              </li>
              <li>
                <a href="#education" onClick={() => setShowModal(false)}>{t('education')}</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setShowModal(false)}>{t('contact')}</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
