import React, { useState } from "react";
import "./projects.css";
import myProjects from "./ProjectsData";
import { FaExternalLinkAlt, FaGithub, FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const { t } = useTranslation('main');
  const [modal, setModal] = useState({ open: false, liveDemo: null });
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const handleCardClick = (liveDemo) => {
    setModal({ open: true, liveDemo });
  };

  const handleModalClose = () => setModal({ open: false, liveDemo: null });
  
  const handleModalConfirm = () => {
    window.open(modal.liveDemo, '_blank');
    setModal({ open: false, liveDemo: null });
  };

  const filteredProjects = filter === 'all' 
    ? myProjects 
    : myProjects.filter(project => project.category?.includes(filter));

  const filterOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React' },
    { key: 'infrastructure', label: 'Infrastructure' },
    { key: 'networking', label: 'Networking' }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`filter-tab glass ${filter === key ? 'active' : ''}`}
            >
              <FaFilter className="filter-icon" />
              {label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.imgPath}
              className="project-card glass-strong animate-fade-in-up"
              onClick={() => handleCardClick(project.liveDemo)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img
                  src={project.imgPath}
                  alt={t(project.projectTitle)}
                  className="project-image"
                />
                <div className="project-overlay glass">
                  <div className="overlay-content">
                    <FaExternalLinkAlt className="overlay-icon" />
                    <span>View Live Demo</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{t(project.projectTitle)}</h3>
                  <p className="project-subtitle">{t(project.projectSubtitle)}</p>
                </div>
                
                <div className="project-technologies">
                  {project.technologies?.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag glass">{tech}</span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span className="tech-tag glass more">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <p className="project-description">
                  {t(project.description)}
                </p>
                
                <div className="project-actions">
                  <button
                    className="project-btn btn-glass"
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
                      className="project-btn btn-primary"
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
            <div className="modal-content glass-strong" onClick={e => e.stopPropagation()}>
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
                  className="btn btn-glass"
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