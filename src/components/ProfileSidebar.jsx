import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ProfileSidebar.css';
import { useTranslation } from 'react-i18next';

const ProfileSidebar = () => {
  const { t } = useTranslation('header');

  const skillsData = [
    {
      category: t('languages'),
      items: t('languages_value').split(',').map(item => item.trim())
    },
    {
      category: t('web_technologies'),
      items: t('web_technologies_value').split('–').map(item => item.trim())
    },
    {
      category: t('software_network'),
      items: ['CCNA Certified', 'Cisco Packet Tracer', 'Network Configuration']
    },
    {
      category: t('tools_platforms'),
      items: t('tools_platforms_value').split('–').map(item => item.trim())
    }
  ];

  return (
    <aside className='profile-sidebar'>
      <div className='profile-card'>
        <img 
          className='profile-photo' 
          src='/images/personalphoto.webp' 
          alt='Mohamed Elshrabay Profile' 
        />
        <div className='profile-info'>
          <h1 className='profile-name'>Mohamed Elshrabay</h1>
          <p className='profile-title'>{t('profile_title')}</p>
          <div className='profile-location'>
            <FaMapMarkerAlt />
            <span>{t('based_in_gizeh_egypt')}</span>
          </div>
          <div className='profile-socials'>
            <a 
              href='https://www.linkedin.com/in/mohamed-khaled4/' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href='https://github.com/Mohamed-khaled0' 
              target='_blank' 
              rel='noopener noreferrer'
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href='mailto:mohamedalshraby3@gmail.com'
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      <div className='profile-skills'>
        <h2 className='skills-section-title'>{t('skills_title')}</h2>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className='skills-category'>
            <h3 className='skills-category-title'>{skillCategory.category}</h3>
            <ul className='skills-list'>
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProfileSidebar;