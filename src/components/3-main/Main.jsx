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
      <h1 className="projects-title">{t('projects_title')}</h1>

      <section className="center-section">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : ""}
        >
          {t('all_projects')}
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          {t('react_nextjs')}
        </button>
        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          {t('javascript')}
        </button>
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          {t('html_css')}
        </button>
      </section>

      <section className="projects-section">
        <AnimatePresence>
          {visibleProjects.map((item, index) => (
            <motion.article
              key={item.imgPath}
              className="card"
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move down
              animate={{ opacity: 1, y: 0 }} // Fade in and move up
              exit={{ opacity: 0, y: 50 }} // Fade out and move down
              transition={{ duration: 0.5, delay: index * 0.2 }} // Add delay based on index
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

                {/* Technologies Section */}
                <div className="technologies">
                  <h2 className="technologies-title">{t('technologies_title')}</h2> 
                  <div className="tech-icons-container">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="tech-icon">
                        {techIcons[tech]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex icons">
                  <div className="icon-container">
                    <a
                      target="_blank"
                      href={item.liveDemo}
                      rel="noopener noreferrer"
                    >
                      <div className="icon">
                        <FaExternalLinkAlt className="icon" />
                        <span className="icon-text"> {t('live_demo')}</span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href={item.githubLink}
                      rel="noopener noreferrer"
                    >
                      <div className="icon">
                        <FaGithub className="icon" />
                        <span className="icon-text"> {t('github')}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/* Show More / Show Less Button */}
      <div className="show-more-container">
        <button className="show-more" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? t('show_less') : t('show_more')}
        </button>
      </div>
    </main>
  );
}
