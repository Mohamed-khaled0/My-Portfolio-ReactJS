/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import "./hero.css";
import { useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Hero() {
  let lottieRef = useRef();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="main" className="hero flex">
      <div className="left-section flex">
        <div className="parent-avatar flex">
          <img className="avatar" src="./myimg.jpg" alt="Mohamed Khaled" />
          <motion.h1 className="title" initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 0.5 }}>
            Hi 👋🏻 I’m Mohamed Khaled
          </motion.h1>
          <motion.h1 className="title" initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 0.5, delay: 0.2 }}>
            Software engineer mainly focused on Web Development
          </motion.h1>
          <motion.h1 className="title" initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 0.5, delay: 0.4 }}>
            I have a passion for building interactive web applications
            My day consists of working on projects with HTML, CSS, Tailwind, JavaScript, TypeScript, and React.js.
          </motion.h1>

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
