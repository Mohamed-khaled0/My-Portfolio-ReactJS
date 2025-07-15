import React from 'react';
import { 
  FaPython, 
  FaDatabase, 
  FaChartBar, 
  FaTable,
  FaBrain,
  FaCode,
  FaSearch,
  FaCalculator,
  FaMicrosoft
} from 'react-icons/fa';
import { SiTableau, SiJupyter, SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Wrangling',
      icon: <FaPython />,
      progress: 90,
      color: '#3776ab',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 'Expert' },
        { name: 'Pandas', icon: <SiPandas />, level: 'Expert' },
        { name: 'NumPy', icon: <SiNumpy />, level: 'Advanced' },
        { name: 'Data Cleaning', icon: <FaCode />, level: 'Expert' }
      ]
    },
    {
      title: 'Data Visualization',
      icon: <SiTableau />,
      progress: 85,
      color: '#e97627',
      skills: [
        { name: 'Tableau', icon: <SiTableau />, level: 'Advanced' },
        { name: 'Power BI', icon: <FaMicrosoft />, level: 'Intermediate' },
        { name: 'Matplotlib', icon: <FaChartBar />, level: 'Advanced' },
        { name: 'Seaborn', icon: <FaChartBar />, level: 'Advanced' }
      ]
    },
    {
      title: 'Statistical Analysis',
      icon: <FaCalculator />,
      progress: 80,
      color: '#2563eb',
      skills: [
        { name: 'Hypothesis Testing', icon: <FaCalculator />, level: 'Advanced' },
        { name: 'Regression Analysis', icon: <FaBrain />, level: 'Advanced' },
        { name: 'A/B Testing', icon: <FaSearch />, level: 'Intermediate' },
        { name: 'Statistical Modeling', icon: <FaBrain />, level: 'Advanced' }
      ]
    },
    {
      title: 'Database Management',
      icon: <FaDatabase />,
      progress: 95,
      color: '#0d9488',
      skills: [
        { name: 'SQL', icon: <FaDatabase />, level: 'Expert' },
        { name: 'MySQL', icon: <FaDatabase />, level: 'Advanced' },
        { name: 'Data Modeling', icon: <FaTable />, level: 'Advanced' },
        { name: 'ETL Processes', icon: <FaCode />, level: 'Intermediate' }
      ]
    }
  ];

  const tools = [
    { name: 'Jupyter Notebooks', icon: <SiJupyter />, category: 'Development' },
    { name: 'Scikit-learn', icon: <SiScikitlearn />, category: 'Machine Learning' },
    { name: 'Git', icon: <FaCode />, category: 'Version Control' },
    { name: 'Excel', icon: <FaTable />, category: 'Analysis' }
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-badge glass">
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Data Analysis <span className="title-highlight">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Specialized skills in transforming raw data into actionable business insights
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category glass-strong"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': category.color 
              }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${category.progress}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                        }}
                      ></div>
                    </div>
                    <span className="progress-text">{category.progress}%</span>
                  </div>
                </div>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item glass">
                    <div className="skill-icon" style={{ color: category.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level" style={{ color: category.color }}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-section glass-strong">
          <h3 className="tools-title">Additional Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="tool-item glass"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="tool-icon">
                  {tool.icon}
                </div>
                <div className="tool-info">
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-category">{tool.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="analytical-strengths glass-strong">
          <h3 className="strengths-title">Analytical Strengths</h3>
          <div className="strengths-list">
            <div className="strength-item">
              <FaBrain className="strength-icon" />
              <span>Statistical Reasoning</span>
            </div>
            <div className="strength-item">
              <FaSearch className="strength-icon" />
              <span>Pattern Recognition</span>
            </div>
            <div className="strength-item">
              <FaCalculator className="strength-icon" />
              <span>Critical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;