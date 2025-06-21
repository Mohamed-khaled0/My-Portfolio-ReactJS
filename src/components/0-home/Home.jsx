import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const { t } = useTranslation('home');
  const readinessPoints = t('readiness_points', { returnObjects: true });

  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-name">{t('full_name')}</h1>
        <p className="intro-text">{t('intro')}</p>
        <p className="ambition-text">{t('ambition')}</p>
        
        <div className="readiness-section">
          <h2 className="readiness-title">{t('readiness_title')}</h2>
          <ul className="readiness-list">
            {readinessPoints && Object.keys(readinessPoints).map(key => (
              <li key={key} className="readiness-item">
                <FaCheckCircle className="readiness-icon" />
                <span>{readinessPoints[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home; 