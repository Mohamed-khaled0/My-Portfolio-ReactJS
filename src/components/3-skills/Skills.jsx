import React from 'react';
import { 
  FaUser, 
  FaBrain, 
  FaCloud, 
  FaCode, 
  FaChartBar,
  FaGraduationCap,
  FaCertificate
} from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Background',
      icon: <FaUser />,
      skills: [
        'As a Senior Data Scientist and Cloud Solutions Architect with 6 AWS certifications, I specialize in developing cutting-edge AI/ML solutions and GenAI innovations. My expertise spans cloud architecture, machine learning, and building scalable AI solutions that drive business value.'
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain />,
      skills: [
        'Neural Networks',
        'Reinforcement Learning',
        'Deep Learning', 
        'Generative AI',
        'Computer Vision',
        'LLM Fine-Tuning',
        'Casual Inference',
        'Neuro-symbolic AI'
      ]
    },
    {
      title: 'Cloud Architecture & MLOps',
      icon: <FaCloud />,
      skills: [
        'AWS SageMaker',
        'Docker/Kubernetes',
        'CloudFormation',
        'Vector DBs',
        'CICD',
        'Docker',
        'GPU Acceleration',
        'Grafana'
      ]
    },
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: [
        'Python',
        'Java',
        'TypeScript',
        'TensorFlow',
        'PyTorch',
        'LangChain',
        'Hugging Face Transformers',
        'Pandas',
        'NumPy'
      ]
    },
    {
      title: 'Data Science',
      icon: <FaChartBar />,
      skills: [
        'Feature Engineering',
        'Dimensionality Reduction',
        'Clustering',
        'Statistical Modeling',
        'Policy Dash',
        'Databases',
        'A/B Testing'
      ]
    }
  ];

  return (
    <section className="skills">
      <div className="container">
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
                {category.title === 'Background' ? (
                  <p className="background-text">{category.skills[0]}</p>
                ) : (
                  <div className="skills-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <button className="btn btn-outline">
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;