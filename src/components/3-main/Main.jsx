/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./main.css";
import myProjects from "./ProjectsData";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from "react-icons/fa"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import GitHub and Live Demo icons
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Import Tailwind CSS icon
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useNavigate } from 'react-router-dom';

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
  const [modal, setModal] = useState({ open: false, liveDemo: null });
  const navigate = useNavigate();

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

  const handleCardClick = (liveDemo) => {
    setModal({ open: true, liveDemo });
  };

  const handleModalClose = () => setModal({ open: false, liveDemo: null });
  const handleModalConfirm = () => {
    window.open(modal.liveDemo, '_blank');
    setModal({ open: false, liveDemo: null });
  };

  const visibleProjects = showMore ? arr : arr.slice(0, 3);

  return (
    <main id="projects" className="main-section">
      <section className="projects-section">
        {arr.map((item, index) => (
          <div
            className="card"
            key={item.imgPath}
            onClick={() => handleCardClick(item.liveDemo)}
          >
            <div className="project-image-wrapper">
              <img
                src={item.imgPath}
                alt={t(item.projectTitle)}
                className="project-image"
              />
            </div>
            <div className="box">
              <h2 className="title">{t(item.projectTitle)}</h2>
              <div className="project-tags">
                {item.technologies && item.technologies.map((tech, i) => (
                  <span className="project-tag" key={i}>{tech}</span>
                ))}
              </div>
              <p className="project-description">{t(item.description)}</p>
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
              <button
                className="read-more"
                onClick={e => {
                  e.stopPropagation();
                  navigate(`/project/${index}`);
                }}
              >
                Read more →
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* Custom Modal */}
      {modal.open && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(40, 40, 48, 0.85)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)'
          }}
          onClick={handleModalClose}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 2px 24px rgba(36,99,235,0.13)',
              padding: '36px 32px',
              minWidth: 320,
              maxWidth: 380,
              textAlign: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ fontSize: 32, color: '#2563eb', marginBottom: 12 }}><FaExternalLinkAlt /></div>
            <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: 8 }}>Go to Live Demo?</h2>
            <p style={{ color: '#555', marginBottom: 18 }}>You are about to leave the portfolio and open the project's live demo in a new tab.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 12 }}>
              <button
                onClick={handleModalConfirm}
                style={{
                  background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '10px 32px',
                  fontWeight: 600,
                  fontSize: '1.08rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(36,99,235,0.08)',
                  transition: 'background 0.18s, color 0.18s, transform 0.13s',
                }}
              >
                Yes, Go!
              </button>
              <button
                onClick={handleModalClose}
                style={{
                  background: '#eef2ff',
                  color: '#2563eb',
                  border: 'none',
                  borderRadius: 999,
                  padding: '10px 22px',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(36,99,235,0.08)',
                  transition: 'background 0.18s, color 0.18s, transform 0.13s',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
