/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUniversity, FaCalendarAlt, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
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
    },
    {
      icon: <FaSchool />,
      degree: t('secondary_title'),
      institution: t('secondary_institution'),
      date: t('secondary_yearRange'),
      description: t('secondary_subjects'),
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">{t('title')}</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">
              {edu.icon}
            </div>
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <div className="meta">
                <span className="meta-item">
                  <FaCalendarAlt /> {edu.date}
                </span>
                {edu.gpa && (
                  <span className="meta-item">
                    <FaGraduationCap /> {edu.gpa}
                  </span>
                )}
              </div>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
