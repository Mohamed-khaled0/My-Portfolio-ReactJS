/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./certifications.css";
import CertificationsData from "./CertificationsData";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; 

const Certifications = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [certificates, setCertificates] = useState(CertificationsData);
  const [showMore, setShowMore] = useState(false);

  const handleFilter = (category) => {
    setCurrentCategory(category);
    if (category === "all") {
      setCertificates(CertificationsData);
    } else {
      const filteredCerts = CertificationsData.filter((cert) =>
        cert.category.includes(category)
      );
      setCertificates(filteredCerts);
    }
  };

  const displayedCerts = showMore ? certificates : certificates.slice(0, 3);

  return (
    <section id="certifications" className="certifications-section">
      <h1 className="title">Certifications</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          onClick={() => handleFilter("all")}
          className={currentCategory === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("internships")}
          className={currentCategory === "internships" ? "active" : ""}
        >
          Internships
        </button>
        <button
          onClick={() => handleFilter("coursera")}
          className={currentCategory === "coursera" ? "active" : ""}
        >
          Coursera

        </button>
        <button
          onClick={() => handleFilter("udacity")}
          className={currentCategory === "udacity" ? "active" : ""}
        >
          Udacity
        </button>
        <button
          onClick={() => handleFilter("hackerrank")}
          className={currentCategory === "hackerrank" ? "active" : ""}
        >
          HackerRank
        </button>
        <button
          onClick={() => handleFilter("iti")}
          className={currentCategory === "iti" ? "active" : ""}
        >
          ITI
        </button>

        
      </div>

      <div className="certifications-container">
        <AnimatePresence>
          {displayedCerts.map((cert, index) => (
            <motion.div
              className="certification-item"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.img}
                  alt={`${cert.name}`}
                  className="cert-img"
                />
              </a>
              <div className="cert-details">
                <h2 className="cert-name">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                </h2>
                <h3 className="cert-authority">{cert.authority}</h3>
                <p className="cert-date">Date : {cert.date}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="external-link">
                  View Certificate <FiExternalLink className="external-link-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {certificates.length > 3 && (
        <div className="show-more-container">
          <button onClick={() => setShowMore(!showMore)} className="show-more-btn">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;
