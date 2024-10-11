/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
import myProjects from "./ProjectsData";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from "react-icons/fa"; 

const techIcons = {
  React: <FaReact />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Bootstrap: <FaBootstrap />,
  JavaScript: <FaJsSquare />,
};

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [showMore, setShowMore] = useState(false);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    if (buttonCategory === "all") {
      setArr(myProjects);
      return;
    }
    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );
    setArr(newArr);
  };

  const visibleProjects = showMore ? arr : arr.slice(0, 3);

  return (
    <main id="projects" className="main-section">
      <h1 className="projects-title">My Projects</h1>

      <section className="center-section">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : ""}
        >
          All projects
        </button>
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          ReactJS
        </button>
      </section>

      <section className="projects-section">
        <AnimatePresence>
          {visibleProjects.map((item) => (
            <motion.article
              key={item.imgPath}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <a href={item.liveDemo} target="_blank" rel="noopener noreferrer">
                <img
                  width={270}
                  height={170}
                  src={item.imgPath}
                  alt={item.projectTitle}
                />
              </a>
              <div className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.projectSubtitle}</p>
                <div className="flex icons">
                  <div className="flex">
                    <a
                      className="icon-link"
                      target="_blank"
                      href={item.liveDemo}
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="icon-github"
                      target="_blank"
                      href={item.githubLink}
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="technologies">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech-icon">
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/* Show More / Show Less Button */}
      <div className="show-more-container">
        <button className="show-more" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </main>
  );
}
