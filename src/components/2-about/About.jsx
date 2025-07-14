import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <span className="about-label">About Me</span>
          <h2 className="about-title">Crafting AI Solutions & Cloud Architecture</h2>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            Senior Data Scientist and AWS Solutions Architect specializing in AI/ML 
            innovations and scalable cloud architecture
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;