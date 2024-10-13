/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
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
      logo: 'https://ci.suez.edu.eg/wp-content/uploads/2022/08/iti-logo.png',
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
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFVBPbc6-yxoA/company-logo_200_200/company-logo_200_200/0/1677167041761?e=2147483647&v=beta&t=xBxH4zLgiEO1RCPbZemcdWDMIZFXROtM2c11jjdQHus',
      githubLink: 'https://github.com/Mohamed-khaled0/E-Commerce-IOS-CodeAlpha-Internship',
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
      logo: 'https://i-cdn.embed.ly/1/display/resize?key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*zUk9tVv_7kOqbhqUdkxFLQ.png&width=175',
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
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <div>
                <h3>{exp.title}</h3>
                <p className="company">
                  <FaBriefcase /> {exp.company}
                </p>
              </div>
            </div>
            <div className="experience-details">
              <span className="location">
                <FaMapMarkerAlt /> {exp.location}
              </span>
              <p className="date">
                <FaCalendarAlt /> {exp.date}
              </p>
            </div>
            <ul className="description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="action-buttons">
              {exp.githubLink && (
                <a href={exp.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" /> GitHub link
                </a>
              )}
              {exp.tableauLink && (
                <a href={exp.tableauLink} target="_blank" rel="noopener noreferrer">
                  <AiOutlineBarChart className="tableau-icon" /> Tableau Link
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
