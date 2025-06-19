/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaBuilding } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
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
      title: t('experience.mobileDeveloperIntern.title'),
      company: t('experience.mobileDeveloperIntern.company'),
      location: t('experience.mobileDeveloperIntern.location'),
      date: t('experience.mobileDeveloperIntern.date'),
      description: [
        t('experience.mobileDeveloperIntern.description.0'),
        t('experience.mobileDeveloperIntern.description.1')
      ],
      logo: '/images/experience/the-sparks-foundation-logo.webp',
      githubLink: 'https://github.com/Mohamed-khaled0/E-Commerce-IOS-CodeAlpha-Internship',
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
    {
      title: t('experience.businessAnalyticsIntern.title'),
      company: t('experience.businessAnalyticsIntern.company'),
      location: t('experience.businessAnalyticsIntern.location'),
      date: t('experience.businessAnalyticsIntern.date'),
      description: [
        t('experience.businessAnalyticsIntern.description.0'),
        t('experience.businessAnalyticsIntern.description.1'),
        t('experience.businessAnalyticsIntern.description.2')
      ],
      logo: '/images/experience/code-alpha-logo.webp',
      tableauLink: 'https://public.tableau.com/app/profile/mohamed.elshraby/viz/Superstore_16507269263970/Dashboard1',
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
              <div>
                <h3>{exp.title}</h3>
                <p className="company">
                  <FaBuilding className="icon-gray" /> {exp.company}
                </p>
              </div>
            </div>
            <div className="experience-details">
              <span className="location">
                <FaMapMarkerAlt className="icon-gray" /> {exp.location}
              </span>
              <p className="date">
                <FaCalendarAlt className="icon-gray" /> {exp.date}
              </p>
            </div>
            <ul className="description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="action-buttons">
              {exp.githubLink && (
                <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn" aria-label="GitHub">
                  <FaGithub className="github-icon icon-gray" /> GitHub
                </a>
              )}
              {exp.tableauLink && (
                <a href={exp.tableauLink} target="_blank" rel="noopener noreferrer" className="tableau-btn" aria-label="Tableau">
                  <AiOutlineBarChart className="tableau-icon icon-gray" /> Tableau
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
