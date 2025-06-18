/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './education.css';

const Education = () => {
  const { t } = useTranslation('education'); // Use the 'education' namespace

  return (
    <section id="education">
      <h2 id='title'>{t('title')}</h2>
      <div className="education-card">
        <div className="education-card-left">
          <img src="/images/edu-logo.webp" alt="Thebes Academy Logo" />
        </div>
        <div className="education-card-right">
          <h3><FaUniversity /> {t('degree')}</h3>
          <p>{t('institution')}</p>
          <p>{t('yearRange')}</p>
          <p>{t('gpa')}</p>
          <ul>
            <li>{t('major')}</li>
          </ul>
        </div>
      </div>
      {/* Space between cards */}
      <div style={{ height: '20px' }} />
      {/* Secondary Education Card */}
      <div className="education-card">
        <div className="education-card-left" style={{height: '115px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {/* Empty for spacing, no image */}
        </div>
        <div className="education-card-right">
          <h3><FaUniversity /> {t('secondary_title')}</h3>
          <p>{t('secondary_institution')}</p>
          <p>{t('secondary_yearRange')}</p>
          <ul>
            <li>{t('secondary_subjects')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
