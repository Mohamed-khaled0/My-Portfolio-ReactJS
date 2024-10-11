/* eslint-disable no-unused-vars */
// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'; // Import GitHub and Tableau icons
import './experience.css';
import { AiOutlineBarChart } from 'react-icons/ai';

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Information Technology Institute ITI',
    location: 'Port Said, Egypt',
    date: ' August 2024 - September 2024',
    description: [
      '- HTML5, CSS, and JavaScript: Developed responsive and dynamic web pages.',
      '- MySQL: Worked with database management, queries, and data manipulation.',
      '- Collaborated with peers and mentors, enhancing problem-solving and teamwork skills.',
      '- Applied version control using Git to manage project versions and changes.'
    ],
    logo: 'https://ci.suez.edu.eg/wp-content/uploads/2022/08/iti-logo.png', // Add logo path
    githubLink: 'https://github.com/Mohamed-khaled0/ITI-Summer-Internship-Tasks', // GitHub link
  },
  {
    title: 'Mobile Developer Intern',
    company: 'CodeAlpha',
    location: 'Remote',
    date: 'Apr 2024 - May 2024',
    description: [
      '- Developed an iOS application named "Sweater Shop."',
      '- MVC Architecture: Followed the Model-View-Controller (MVC) design pattern to maintain clean and organized code.'
    ],
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFVBPbc6-yxoA/company-logo_200_200/company-logo_200_200/0/1677167041761?e=2147483647&v=beta&t=xBxH4zLgiEO1RCPbZemcdWDMIZFXROtM2c11jjdQHus', // Add logo path
    githubLink: 'https://github.com/Mohamed-khaled0/E-Commerce-IOS-CodeAlpha-Internship', // GitHub link
  },
  {
    title: 'Business Analytics Intern',
    company: 'The Sparks Foundation',
    location: 'Remote',
    date: 'May 2022 - Jun 2022',
    description: [
      '- Applied SQL and Microsoft Excel for data handling and analysis.',
      '- Conducted an Exploratory Data Analysis on retail data to identify key insights.',
      '- Created an interactive Tableau dashboard to visualize the data and findings.'
    ],
    logo: 'https://i-cdn.embed.ly/1/display/resize?key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*zUk9tVv_7kOqbhqUdkxFLQ.png&width=175', // Add logo path
    tableauLink: 'https://public.tableau.com/app/profile/mohamed.elshraby/viz/Superstore_16507269263970/Dashboard1', // Tableau link
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 id='experience' className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Add delay based on index
          >
            <div className="experience-header">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" /> {/* Logo */}
              <div>
                <h3>{exp.title}</h3>
                <p className="company">
                  <FaBriefcase /> {exp.company} {/* Company icon */}
                </p>
              </div>
            </div>
            <div className="experience-details">
              <span className="location">
                <FaMapMarkerAlt /> {exp.location}
              </span>
              <p className="date">
                <FaCalendarAlt /> {exp.date}
              </p>
            </div>
            <ul className="description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="action-buttons">
              {exp.githubLink && (
                <a href={exp.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" /> GitHub Repo
                </a>
              )}
              {exp.tableauLink && (
                <a href={exp.tableauLink} target="_blank" rel="noopener noreferrer">
                  <AiOutlineBarChart className="tableau-icon" /> Tableau 
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
