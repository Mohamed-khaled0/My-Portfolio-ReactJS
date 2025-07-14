import React from 'react';
import { FaGraduationCap, FaCertificate, FaLanguage, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './about.css';

const About = () => {
  const { t } = useTranslation('home');

  const highlights = [
    {
      icon: <FaGraduationCap />,
      text: "B.Sc. Computer Science – GPA 1.62"
    },
    {
      icon: <FaCertificate />,
      text: "CCNA & AWS Cloud Practitioner"
    },
    {
      icon: <FaLanguage />,
      text: "German (B2), English (Fluent)"
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/personalphoto.webp" 
              alt="Mohamed Khaled Elsharaby" 
              className="profile-image"
            />
            <div className="image-decoration"></div>
          </div>
          
          <div className="about-text">
            <div className="about-intro">
              <h3 className="about-subtitle">Cloud Engineer & System Integration Specialist</h3>
              <p className="about-description">
                {t('intro')}
              </p>
              <p className="about-description">
                {t('ambition')}
              </p>
            </div>
            
            <div className="about-highlights">
              <h4 className="highlights-title">Key Highlights</h4>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <div className="highlight-icon">
                      {highlight.icon}
                    </div>
                    <span className="highlight-text">{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="about-readiness">
              <h4 className="readiness-title">{t('readiness_title')}</h4>
              <div className="readiness-items">
                {Object.entries(t('readiness_points', { returnObjects: true }) || {}).map(([key, value]) => (
                  <div key={key} className="readiness-item">
                    <FaCheckCircle className="readiness-icon" />
                    <span className="readiness-text">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;