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
      logo: '/images/experience/shajarataldurr.webp',
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-marker"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="company-logo" 
                  />
                  <div className="experience-details">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <FaBuilding style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      {exp.company}
                    </div>
                  </div>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <div className="description-list">
                    {exp.description.map((point, i) => (
                      <div key={i} className="description-item">{point}</div>
                    ))}
                  </div>
                </div>
                
                {exp.githubLink && (
                  <div className="experience-actions">
                    <a 
                      href={exp.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="action-link"
                    >
                      <FaGithub />
                      View Projects
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;