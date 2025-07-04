import React from 'react';
import { FaUniversity, FaCalendarAlt, FaGraduationCap, FaSchool, FaAward } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './education.css';

const Education = () => {
  const { t } = useTranslation('education');

  const educationData = [
    {
      icon: <FaUniversity />,
      degree: t('degree'),
      institution: t('institution'),
      date: t('yearRange'),
      gpa: t('gpa'),
      description: t('major'),
      highlights: ['Computer Science', 'Top Grade Project', 'CCNA Certified']
    },
    {
      icon: <FaSchool />,
      degree: t('secondary_title'),
      institution: t('secondary_institution'),
      date: t('secondary_yearRange'),
      description: t('secondary_subjects'),
      highlights: ['Science Track', 'Mathematics', 'Physics']
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-header">
                <div className="education-icon">
                  {edu.icon}
                </div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">{edu.institution}</div>
                </div>
              </div>
              
              <div className="education-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{edu.date}</span>
                </div>
                {edu.gpa && (
                  <div className="meta-item">
                    <FaAward className="meta-icon" />
                    <span>{edu.gpa}</span>
                  </div>
                )}
              </div>
              
              <p className="education-description">{edu.description}</p>
              
              {edu.highlights && (
                <div className="education-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className={`highlight-badge ${i === 0 ? 'primary' : ''}`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;