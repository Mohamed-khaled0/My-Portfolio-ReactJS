import { useState } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

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
              <a href="">About</a>
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
        </nav>

        <button className="mode flex">
          <span className="icon-moon-o"></span>
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
                <a href="">About</a>
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
