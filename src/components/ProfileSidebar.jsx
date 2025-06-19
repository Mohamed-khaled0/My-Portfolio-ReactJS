import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Skills from './4-skills/Skills';
import './ProfileSidebar.css';

const ProfileSidebar = () => {
  return (
    <aside className='profile-sidebar'>
      <div className='profile-card'>
        <img className='profile-photo' src='/images/personalphoto.webp' alt='Profile' />
        <h2>Mohamed</h2>
        <p className='profile-title'>Ex- Data Analyst Intern @ Udacity | ITI Intern</p>
        <p className='profile-location'><FaMapMarkerAlt /> Based in Gizeh, Ägypten</p>
        <div className='profile-socials'>
          <a href='https://www.linkedin.com/in/mohamed-khaled4/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          <a href='https://github.com/Mohamed-khaled0' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
          <a href='mailto:mohamed.khaled@example.com'><FaEnvelope /></a>
        </div>
        <div className='profile-skills'>
          <Skills sidebarMode />
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar; 