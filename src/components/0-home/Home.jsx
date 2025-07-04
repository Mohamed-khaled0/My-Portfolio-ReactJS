import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const { t } = useTranslation('home');
  const readinessPoints = t('readiness_points', { returnObjects: true });

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-header">
            <h1 className="home-name">{t('full_name')}</h1>
            <p className="home-subtitle">Computer Science Graduate & IT Specialist</p>
          </div>
          
          <div className="home-body">
            <p className="intro-text">{t('intro')}</p>
            <p className="ambition-text">{t('ambition')}</p>
          </div>
          
          <div className="readiness-section">
            <h2 className="readiness-title">{t('readiness_title')}</h2>
            <div className="readiness-list">
              {readinessPoints && Object.keys(readinessPoints).map(key => (
                <div key={key} className="readiness-item">
                  <FaCheckCircle className="readiness-icon" />
                  <span className="readiness-text">{readinessPoints[key]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;