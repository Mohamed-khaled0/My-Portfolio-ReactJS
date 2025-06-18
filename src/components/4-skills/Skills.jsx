/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiTypescript, SiPostman, SiFlutter, SiDart, SiPython } from 'react-icons/si';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGit, 
  FaGithub, 
  FaDatabase, 
  FaNetworkWired,
  FaWindows,
  FaServer,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './skills.css';


const skillsData = [
  { name: 'HTML', icon: <FaHtml5 size={50} style={{ color: '#E44D26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} style={{ color: '#1572B6' }} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={50} style={{ color: '#38B2AC' }} /> },
  { name: 'JavaScript', icon: <FaJs size={50} style={{ color: '#F7DF1E' }} /> },
  { name: 'React', icon: <FaReact size={50} style={{ color: '#61DAFB' }} /> },
  { name: 'MySQL', icon: <FaDatabase size={50} style={{ color: '#4479A1' }} /> },
  { name: 'Postman', icon: <SiPostman size={50} style={{ color: '#FF6C37' }} /> },
  { name: 'Git', icon: <FaGit size={50} style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <FaGithub size={50} style={{ color: '#181717' }} /> },
  { name: 'CCNA', icon: <FaNetworkWired size={50} style={{ color: '#0077b6' }} /> },
  { name: 'Cisco Packet Tracer', icon: <FaNetworkWired size={50} style={{ color: '#00BFFF' }} /> },
  { name: 'Python', icon: <SiPython size={50} style={{ color: '#3776AB' }} /> },
  { name: 'SQL', icon: <FaDatabase size={50} style={{ color: '#4DB33D' }} /> },
  { name: 'Microsoft Office', icon: <FaWindows size={50} style={{ color: '#ea3e23' }} /> },
  { name: 'Microsoft Server', icon: <FaServer size={50} style={{ color: '#0077b6' }} /> },
];
const Skills = () => {
  const { t } = useTranslation('skills'); // Specify 'skills' namespace

  return (
    <section id="skills">
      <div className="skills-title">
        <h2>{t('title')}</h2>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }} 
            whileHover={{ scale: 1.1 }} 
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
