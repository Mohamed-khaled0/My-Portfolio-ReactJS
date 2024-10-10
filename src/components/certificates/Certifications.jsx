/* eslint-disable no-unused-vars */
/* src/components/8-certifications/Certifications.jsx */
import React from "react";
import "./certifications.css";
import { motion } from "framer-motion";
import CertificationsData from "./CertificationsData";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h1 className="title">
      </h1>
      <div className="certifications-container">
        {CertificationsData.map((cert, index) => (
          <motion.div
            className="certification-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={cert.logo}
              alt={`${cert.name} logo`}
              className="cert-logo"
            />
            <div className="cert-details">
              <h2 className="cert-name">{cert.name}</h2>
              <h3 className="cert-authority">{cert.authority}</h3>
              <p className="cert-date">{cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
