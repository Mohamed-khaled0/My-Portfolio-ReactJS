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
          <img src="https://i.imgur.com/wSab0Hn.jpegnpm" alt="Thebes Academy Logo" />
        </div>
        <div className="education-card-right">
          <h3><FaUniversity /> {t('degree')}</h3>
          <p>{t('institution')}</p>
          <p>{t('yearRange')}</p>
          <p>{t('gpa')}</p>
          <ul>
            <li>{t('major')}</li>
            <li>{t('minor')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
