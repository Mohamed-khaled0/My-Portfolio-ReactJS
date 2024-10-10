/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import "./hero.css";
import { useRef } from "react";

export default function Hero() {
  let lottieRef = useRef();
  return (
    <section id="main" className="hero flex">
      <div className="left-section flex">
        <div className="parent-avatar flex">
          <img
            className="avatar"
            src="./myimg.jpg"
            alt=""
          />
          <h1 className="title">Hi 👋🏻 I’m Mohamed Khaled</h1>
          <h1 className="title">
            Software engineer mainly focused on Web Development
          </h1>

          <p className="sub-title">
            I'm currently interning as a web developer at the Information Technology
            Institute (ITI). I spend my day working on projects with HTML, CSS,
            Tailwind, JavaScript, TypeScript, and React.js.
          </p>
        </div>

        <div className="button-group flex">
          <a href="#" target="_blank">
            <button>
              <span className="icon-cloud-download"></span> Resume
            </button>
          </a>
          <a href="https://github.com/Mohamed-khaled0" target="_blank">
            <button>
              <span className="icon-github"></span> Github
            </button>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-khaled3/" target="_blank">
            <button>
              <span className="icon-linkedin"></span> LinkedIn
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
