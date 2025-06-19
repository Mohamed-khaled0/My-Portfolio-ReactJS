import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Skills from './4-skills/Skills';
import './ProfileSidebar.css';
import { useTranslation } from 'react-i18next';

const ProfileSidebar = () => {
  const { t } = useTranslation('header');

  return (
    <aside className='profile-sidebar'>
      <div className='profile-card'>
        <img className='profile-photo' src='/images/personalphoto.webp' alt='Profile' style={{ width: 160, height: 160, objectFit: 'cover' }} />
        <h2 style={{ color: '#000' }}>Mohamed Elshrabay</h2>
        <p className='profile-title'>{t('profile_title')}</p>
        <p className='profile-location'><FaMapMarkerAlt /> {t('based_in_gizeh_egypt')}</p>
        <div className='profile-socials'>
          <a href='https://www.linkedin.com/in/mohamed-khaled4/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          <a href='https://github.com/Mohamed-khaled0' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
          <a href='mailto:mohamedalshraby3@gmail.com'><FaEnvelope /></a>
        </div>
        <div className='profile-extra-info'>
          <h3>{t('skills_title')}</h3>
          <ul className='profile-info-list'>
            <li><strong>{t('languages')}:</strong>
              <ul className='profile-info-sublist'>
                {t('languages_value').split(',').map((lang, idx) => (
                  <li key={idx}>{lang.trim()}</li>
                ))}
              </ul>
            </li>
            <li><strong>{t('software_network')}:</strong>
              <ul className='profile-info-sublist'>
                {t('software_network_value').split('–').map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </li>
            <li><strong>{t('web_technologies')}:</strong>
              <ul className='profile-info-sublist'>
                {t('web_technologies_value').split('–').map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </li>
            <li><strong>{t('tools_platforms')}:</strong>
              <ul className='profile-info-sublist'>
                {t('tools_platforms_value').split('–').map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </li>
            <li><strong>{t('personal_strengths')}:</strong>
              <ul className='profile-info-sublist'>
                {t('personal_strengths_value').split('–').map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar; 