/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaBuilding } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './experience.css';

const Experience = () => {
  const { t } = useTranslation('experience');

  const experiences = [
    {
      title: t('experience.webDeveloperIntern.title'),
      company: t('experience.webDeveloperIntern.company'),
      location: t('experience.webDeveloperIntern.location'),
      date: t('experience.webDeveloperIntern.date'),
      description: [
        t('experience.webDeveloperIntern.description.0'),
        t('experience.webDeveloperIntern.description.1'),
        t('experience.webDeveloperIntern.description.2'),
        t('experience.webDeveloperIntern.description.3')
      ],
      logo: '/images/experience/iti-logo.webp',
      githubLink: 'https://github.com/Mohamed-khaled0/ITI-Summer-Internship-Tasks',
    },
    {
      title: t('experience.itSupportSpecialist.title'),
      company: t('experience.itSupportSpecialist.company'),
      location: t('experience.itSupportSpecialist.location'),
      date: t('experience.itSupportSpecialist.date'),
      description: [
        t('experience.itSupportSpecialist.description.0'),
        t('experience.itSupportSpecialist.description.1'),
        t('experience.itSupportSpecialist.description.2')
      ],
      logo: t('experience.itSupportSpecialist.logo'),
    },
    
  ];

  return (
    <div className="experience-container">
      <h2 id='experience' className="section-title">{t('experience.title')}</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-header">
              <div className="company-logo-wrapper">
                <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              </div>
              <div className="experience-title-group">
                <h3>{exp.title}</h3>
                <p className="company">
                  <FaBuilding className="icon-gray" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> {exp.company}
                </p>
              </div>
            </div>
            <div className="experience-meta">
              <span className="location">
                <FaMapMarkerAlt className="icon-gray" /> {exp.location}
              </span>
              <span className="date">
                <FaCalendarAlt className="icon-gray" /> {exp.date}
              </span>
            </div>
            <div className="description">
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            {exp.githubLink && (
              <div className="action-buttons">
                <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn" aria-label="GitHub">
                  <FaGithub className="github-icon" /> GitHub
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
