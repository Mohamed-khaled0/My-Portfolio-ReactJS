/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  let [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

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
              <a href="">
                <span className="icon-home"></span> About
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-folders"></span> Projects
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-education"></span> Education
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-gears"></span> Skills
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-phone"></span> Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            // Send value to LS
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );

            // get value from LS
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
                <a  href="">  About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
