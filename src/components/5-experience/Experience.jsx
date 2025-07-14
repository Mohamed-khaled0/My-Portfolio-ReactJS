import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaBuilding, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './experience.css';

const Experience = () => {
  const { t } = useTranslation('experience');

  const experiences = [
    {
      title: t('experience.webDeveloperIntern.title'),
      company: t('experience.webDeveloperIntern.company'),
      location: t('experience.webDeveloperIntern.location'),
      date: t('experience.webDeveloperIntern.date'),
      description: [
        t('experience.webDeveloperIntern.description.0'),
        t('experience.webDeveloperIntern.description.1'),
        t('experience.webDeveloperIntern.description.2'),
        t('experience.webDeveloperIntern.description.3')
      ],
      logo: '/images/experience/iti-logo.webp',
      githubLink: 'https://github.com/Mohamed-khaled0/ITI-Summer-Internship-Tasks',
      type: 'internship',
      featured: true
    },
    {
      title: t('experience.itSupportSpecialist.title'),
      company: t('experience.itSupportSpecialist.company'),
      location: t('experience.itSupportSpecialist.location'),
      date: t('experience.itSupportSpecialist.date'),
      description: [
        t('experience.itSupportSpecialist.description.0'),
        t('experience.itSupportSpecialist.description.1'),
        t('experience.itSupportSpecialist.description.2')
      ],
      logo: '/images/experience/shajarataldurr.webp',
      type: 'full-time',
      featured: false
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item glass-strong animate-fade-in-up ${exp.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-marker glass">
                <div className="marker-dot"></div>
              </div>
              
              <div className="experience-card glass">
                <div className="experience-header">
                  <div className="company-logo-container glass">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="company-logo" 
                    />
                  </div>
                  
                  <div className="experience-details">
                    <div className="experience-meta">
                      <span className={`experience-type glass ${exp.type}`}>
                        {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                      </span>
                      {exp.featured && (
                        <span className="featured-badge glass">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="experience-title">{exp.title}</h3>
                    
                    <div className="experience-company">
                      <FaBuilding className="company-icon" />
                      {exp.company}
                    </div>
                    
                    <div className="experience-info">
                      <div className="info-item glass">
                        <FaMapMarkerAlt className="info-icon" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="info-item glass">
                        <FaCalendarAlt className="info-icon" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="experience-description">
                  <div className="description-list">
                    {exp.description.map((point, i) => (
                      <div key={i} className="description-item glass">
                        <FaChevronRight className="description-icon" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {exp.githubLink && (
                  <div className="experience-actions">
                    <a 
                      href={exp.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="action-link btn-primary"
                    >
                      <FaGithub />
                      View Projects
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;