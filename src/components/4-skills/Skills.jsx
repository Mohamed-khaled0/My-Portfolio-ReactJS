/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMysql, SiPostman } from 'react-icons/si';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGit, 
  FaGithub, 
  FaDatabase, 
  FaSass, 
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './skills.css';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 size={50} style={{ color: '#E44D26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} style={{ color: '#1572B6' }} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} style={{ color: '#7952B3' }} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={50} style={{ color: '#38B2AC' }} /> },
  { name: 'SASS', icon: <FaSass size={50} style={{ color: '#CC6699' }} /> },
  { name: 'JavaScript', icon: <FaJs size={50} style={{ color: '#F7DF1E' }} /> },
  { name: 'TypeScript', icon: <SiTypescript size={50} style={{ color: '#007ACC' }} /> },
  { name: 'React', icon: <FaReact size={50} style={{ color: '#61DAFB' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} style={{ color: '#000000' }} /> },
  { name: 'MySQL', icon: <FaDatabase size={50} style={{ color: '#4479A1' }} /> },
  { name: 'Postman', icon: <SiPostman size={50} style={{ color: '#FF6C37' }} /> },
  { name: 'Git', icon: <FaGit size={50} style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <FaGithub size={50} style={{ color: '#181717' }} /> },
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
