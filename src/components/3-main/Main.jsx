/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
import myProjects from "./ProjectsData";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from "react-icons/fa"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import GitHub and Live Demo icons
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Import Tailwind CSS icon
import { useTranslation } from "react-i18next"; // Import useTranslation

const techIcons = {
  React: <FaReact />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Bootstrap: <FaBootstrap />,
  JavaScript: <FaJsSquare />,
  Tailwind: <SiTailwindcss />, 
  NextJs: <SiNextdotjs/>
  // Add more tech icons as needed
};

export default function Main() {
  const { t } = useTranslation('main'); // Hook to use translations
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
      <section className="projects-section">
        {arr.map((item, index) => (
          <div className="card" key={item.imgPath}>
            <img
              width={270}
              height={170}
              src={item.imgPath}
              alt={item.projectTitle}
              className="project-image"
            />
            <div className="box">
              <h2 className="title">{item.projectTitle}</h2>
              <div className="project-tags">
                {item.technologies && item.technologies.map((tech, i) => (
                  <span className="project-tag" key={i}>{tech}</span>
                ))}
              </div>
              <p className="sub-title">{item.projectSubtitle}</p>
              <div className="project-buttons">
                {item.technologies && item.technologies.includes('Excel') && (
                  <button className="project-btn">Excel for data cleaning</button>
                )}
                {item.technologies && item.technologies.includes('SQL') && (
                  <button className="project-btn">SQL</button>
                )}
                {item.technologies && item.technologies.includes('Data Visualization') && (
                  <button className="project-btn">Data Visualization</button>
                )}
                {item.technologies && item.technologies.includes('Tableau') && (
                  <button className="project-btn">Tableau</button>
                )}
              </div>
              <a className="read-more" href={item.liveDemo} target="_blank" rel="noopener noreferrer">Read more →</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
