import React from 'react';
import { motion } from 'framer-motion';
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
  FaLanguage,
  FaTools,
  FaCode,
  FaBrain
} from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiPython, SiMysql } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import './skills.css';

const Skills = ({ sidebarMode }) => {
  const { t } = useTranslation('skills');

  const skillsCategories = [
    {
      title: 'Languages',
      icon: <FaLanguage />,
      skills: [
        { name: 'German (B2)', icon: <FaLanguage /> },
        { name: 'English (Fluent)', icon: <FaLanguage /> },
        { name: 'Arabic (Native)', icon: <FaLanguage /> }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <FaCode />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Software & Network',
      icon: <FaNetworkWired />,
      skills: [
        { name: 'CCNA Certified', icon: <FaNetworkWired /> },
        { name: 'Cisco Packet Tracer', icon: <FaNetworkWired /> },
        { name: 'Network Configuration', icon: <FaServer /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Git & GitHub', icon: <FaGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Microsoft Office', icon: <FaWindows /> }
      ]
    }
  ];

  if (sidebarMode) {
    return (
      <div>
        <div className="skills-section-title">Skills</div>
        <div className="skills-tags">
          {skillsCategories.flatMap(category => 
            category.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;