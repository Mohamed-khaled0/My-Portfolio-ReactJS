import React from "react";
import "./projects.css";
import myProjects from "./ProjectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of my recent work in cloud architecture and full-stack development
          </p>
        </div>

        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.imgPath} 
                  alt={project.projectTitle}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                <div className="project-info">
                  <h3 className="project-title">{project.projectTitle}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-technologies">
                  {project.technologies.slice(0, 8).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="btn btn-outline">View All Projects</button>
        </div>
      </div>
    </section>
  );
}