/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import "./hero.css";
import { useRef } from "react";

export default function Hero() {
  let lottieRef = useRef();
  return (
    <section id="main" className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img
            className="avatar"
            src="./myimg.jpg"
            alt=""
          />
        </div>

        <h1 className="title">Hi 👋🏻 I’m Mohamed Khaled </h1>
        <h1 className="title">
          Software engineer mainly focused on Web Development{" "}
        </h1>

        <p className="sub-title">
          I'm currently intern as a web developer at Information Technology
          Institute ITI. I spend my day working on projects with HTML , CSS ,
          Tailwind , JavaScript ,TypeScript , React.js.
        </p>
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

    </section>
  );
}
