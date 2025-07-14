import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';

const About = () => {
  const { t } = useTranslation('home');
  const readinessPoints = t('readiness_points', { returnObjects: true });

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <span className="about-label">About Me</span>
          <h2 className="about-title">{t('welcome_title')}</h2>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            {t('about_me_intro')}
          </p>
          <p className="about-intro">
            {t('intro')}
          </p>
          <p className="about-ambition">
            {t('ambition')}
          </p>
          
          <div className="readiness-section">
            <h3 className="readiness-title">{t('readiness_title')}</h3>
            <ul className="readiness-list">
              <li>{readinessPoints.languages}</li>
              <li>{readinessPoints.relocation}</li>
              <li>{readinessPoints.documents}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;