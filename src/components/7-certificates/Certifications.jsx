import React, { useState } from "react";
import "./certifications.css";
import CertificationsData from "./CertificationsData";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; 
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation(['certifications']);
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

  const displayedCerts = showMore ? certificates : certificates.slice(0, 6);

  const filterOptions = [
    { key: "all", label: t("all") },
    { key: "internships", label: t("internships") },
    { key: "coursera", label: t("coursera") },
    { key: "udacity", label: t("udacity") },
    { key: "hackerrank", label: t("hackerrank") },
    { key: "iti", label: t("iti") }
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div className="filter-tabs">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleFilter(key)}
              className={`filter-tab ${currentCategory === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="certifications-grid">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.article
                key={`${cert.name}-${index}`}
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="cert-image-container">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="cert-image"
                  />
                  <div className="cert-overlay">
                    <span>View Certificate</span>
                  </div>
                </div>
                
                <div className="cert-content">
                  <div className="cert-header">
                    <h3 className="cert-name">{cert.name}</h3>
                    <div className="cert-authority">{cert.authority}</div>
                    <div className="cert-date">{cert.date}</div>
                  </div>
                  
                  {cert.description && (
                    <p className="cert-description">
                      {t(cert.descKey || '', { defaultValue: cert.description }) || cert.description}
                    </p>
                  )}
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-action"
                    onClick={e => e.stopPropagation()}
                  >
                    <span>View Certificate</span>
                    <FiExternalLink />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {certificates.length > 6 && (
          <div className="show-more-container">
            <button 
              onClick={() => setShowMore(!showMore)} 
              className="show-more-btn"
            >
              {showMore ? t("show_less") : t("show_more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;