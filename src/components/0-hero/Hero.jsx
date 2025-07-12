import React from 'react';
import { FaArrowRight, FaCloud, FaServer, FaNetworkWired } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './hero.css';

const Hero = () => {
  const { t } = useTranslation('hero');

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 80;
      const elementPosition = projectsSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="cloud-animation">
          <FaCloud className="cloud cloud-1" />
          <FaCloud className="cloud cloud-2" />
          <FaCloud className="cloud cloud-3" />
          <FaServer className="server server-1" />
          <FaNetworkWired className="network network-1" />
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">Mohamed Khaled Elsharaby</span>
              <span className="hero-role">Cloud Engineer & System Integration Enthusiast</span>
            </h1>
            
            <p className="hero-subtitle">
              I build scalable, secure cloud infrastructures for tomorrow's enterprises.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary hero-cta"
                onClick={handleViewProjects}
              >
                View Projects
                <FaArrowRight />
              </button>
              
              <a 
                href="/files/Mohamed_Khaled_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;