import React, { useState } from 'react';
import { 
  FaAws, 
  FaMicrosoft, 
  FaGoogle, 
  FaNetworkWired, 
  FaDocker, 
  FaPython, 
  FaReact, 
  FaPhp,
  FaServer,
  FaCloud,
  FaCogs,
  FaCode
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import './skills.css';

const Skills = () => {
  const { t } = useTranslation('skills');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <FaCloud />,
      color: 'var(--primary)',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 85, years: '2+' },
        { name: 'Azure', icon: <FaMicrosoft />, level: 70, years: '1+' },
        { name: 'GCP', icon: <FaGoogle />, level: 60, years: '1+' }
      ]
    },
    {
      title: 'Networking',
      icon: <FaNetworkWired />,
      color: 'var(--accent)',
      skills: [
        { name: 'CCNA', icon: <FaNetworkWired />, level: 90, years: '3+' },
        { name: 'VLAN', icon: <FaServer />, level: 85, years: '2+' },
        { name: 'Routing', icon: <FaCogs />, level: 80, years: '2+' }
      ]
    },
    {
      title: 'DevOps Tools',
      icon: <FaCogs />,
      color: 'var(--success)',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 80, years: '2+' },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 70, years: '1+' },
        { name: 'Terraform', icon: <SiTerraform />, level: 75, years: '1+' }
      ]
    },
    {
      title: 'Languages & Frameworks',
      icon: <FaCode />,
      color: 'var(--warning)',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 85, years: '3+' },
        { name: 'PHP', icon: <FaPhp />, level: 80, years: '2+' },
        { name: 'React', icon: <FaReact />, level: 75, years: '2+' }
      ]
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ background: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <div className="skill-header">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      
                      <div className="skill-meta">
                        <span className="skill-level">{skill.level}%</span>
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <span className="skill-years">{skill.years} years</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          background: category.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h3 className="summary-title">Technical Proficiency</h3>
            <p className="summary-text">
              Specialized in cloud infrastructure design, network configuration, and DevOps automation. 
              Experienced in building scalable, secure systems using modern cloud-native technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;