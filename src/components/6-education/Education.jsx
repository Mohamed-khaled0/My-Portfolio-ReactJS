/* eslint-disable no-unused-vars */
import React from 'react';
import {  FaUniversity } from 'react-icons/fa';
import './education.css';

const Education = () => {
    const educationData = {
        title: 'Bachelor of Computer Science',
        institution: 'Thebes Higher Institute of Information Technology',
        yearRange: '2021 : 2025',
        gpa: 'GPA 3/4',
        major: '- Major in Computer Science',
        minor: '- Minor in Web Applications',
        imageUrl: "./thebes-logo.png"
    };

    return (
        <section id="education">
            <h2 id='title'>Education </h2>
            <div className="education-card">
                <div className="education-card-left">
                    <img src={educationData.imageUrl} alt="Thebes Academy Logo" />
                </div>
                <div className="education-card-right">
                    <h3><FaUniversity /> {educationData.title}</h3>
                    <p>{educationData.institution}</p>
                    <p>{educationData.yearRange}</p>
                    <p>{educationData.gpa}</p>
                    <ul>
                        <li>  {educationData.major}</li>
                        <li> {educationData.minor}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
