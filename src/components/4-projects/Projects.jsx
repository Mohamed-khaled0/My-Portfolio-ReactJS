import React, { useState } from "react";
import "./projects.css";
import myProjects from "./ProjectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const { t } = useTranslation('main');
  const [modal, setModal] = useState({ open: false, liveDemo: null });
  const navigate = useNavigate();

  const handleCardClick = (liveDemo) => {
    setModal({ open: true, liveDemo });
  };

  const handleModalClose = () => setModal({ open: false, liveDemo: null });
  
  const handleModalConfirm = () => {
    window.open(modal.liveDemo, '_blank');
    setModal({ open: false, liveDemo: null });
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <article
              key={project.imgPath}
              className="project-card"
              onClick={() => handleCardClick(project.liveDemo)}
            >
              <div className="project-image-container">
                <img
                  src={project.imgPath}
                  alt={t(project.projectTitle)}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span>View Live Demo</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{t(project.projectTitle)}</h3>
                  <p className="project-subtitle">{t(project.projectSubtitle)}</p>
                </div>
                
                <div className="project-technologies">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <p className="project-description">
                  {t(project.description)}
                </p>
                
                <div className="project-actions">
                  <button
                    className="project-btn project-btn-secondary"
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`/project/${index}`);
                    }}
                  >
                    Learn More
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Modal */}
        {modal.open && (
          <div className="project-modal" onClick={handleModalClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-icon">
                <FaExternalLinkAlt />
              </div>
              <h3 className="modal-title">Open Live Demo?</h3>
              <p className="modal-description">
                You're about to leave this portfolio and view the project's live demo in a new tab.
              </p>
              <div className="modal-actions">
                <button
                  onClick={handleModalConfirm}
                  className="btn btn-primary"
                >
                  Yes, Open Demo
                </button>
                <button
                  onClick={handleModalClose}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}