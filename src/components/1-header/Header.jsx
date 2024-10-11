import { useEffect, useState } from "react";
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa"; // Importing icons
import { MdBuild } from "react-icons/md"; 
import "./header.css";

export default function Header() {
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

  return (
    <div>
      <header className="flex">
        <button
          className="menu icon-menu flex"
          onClick={() => {
            setShowModal(true);
          }}
        ></button>
        <div />

        <nav>
          <ul className="flex">
            <li>
              <a href="#main">
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaCode /> Projects
              </a>
            </li>
            <li>
              <a href="#skills">
                <MdBuild /> Skills
              </a>
            </li>
            <li>
              <a href="#experience">
                <FaBriefcase /> Experience
              </a>
            </li>
            <li>
              <a href="#education">
                <FaGraduationCap /> Education
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode flex"
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
                ></button>
              </li>
              <li>
                <a href="#main" onClick={() => setShowModal(false)}>Home</a>
              </li>
              <li>
                <a href="#projects" onClick={() => setShowModal(false)}>Projects</a>
              </li>
              <li>
                <a href="#skills" onClick={() => setShowModal(false)}>Skills</a>
              </li>
              <li>
                <a href="#experience" onClick={() => setShowModal(false)}>Experience</a>
              </li>
              <li>
                <a href="#education" onClick={() => setShowModal(false)}>Education</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setShowModal(false)}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
