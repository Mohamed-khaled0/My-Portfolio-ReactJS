import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaLanguage, 
  FaNetworkWired, 
  FaCode, 
  FaTools,
  FaBrain,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGit
} from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  const { t } = useTranslation('skills');

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaLanguage />,
      description: t('languages')
    },
    {
      title: 'Software & Network',
      icon: <FaNetworkWired />,
      description: t('software_network')
    },
    {
      title: 'Web Technologies',
      icon: <FaCode />,
      description: t('web_technologies')
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      description: t('tools_platforms')
    },
    {
      title: 'Personal Strengths',
      icon: <FaBrain />,
      description: t('strengths')
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-title">{t('title')}</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="category-skills">
                <p className="skill-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <p className="skills-note">
            Ready to apply these skills in a Fachinformatiker apprenticeship focused on system integration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;