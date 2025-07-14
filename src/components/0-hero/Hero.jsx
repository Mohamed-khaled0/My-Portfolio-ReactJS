import React from 'react';
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

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="/images/personalphoto.webp" 
              alt="Mohamed Khaled Elsharaby" 
              className="profile-photo"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">{t('greeting')}</h1>
            <p className="hero-subtitle">
              {t('profession')}
            </p>
            <div className="hero-description">
              <p>{t('description')}</p>
            </div>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={handleGetInTouch}
              >
                Get in Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleViewProjects}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;