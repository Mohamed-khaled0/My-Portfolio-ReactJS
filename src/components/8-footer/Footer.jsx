import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation('footer');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-nav">
            <a href="#home">{t('footer.home')}</a>
            <a href="#projects">{t('footer.projects')}</a>
            <a href="#skills">{t('footer.skills')}</a>
            <a href="#experience">{t('footer.experience')}</a>
            <a href="#education">{t('footer.education')}</a>
            <a href="#contact">{t('footer.contact')}</a>
          </div>
          
          <div className="footer-actions">
            <div className="language-switcher">
              <button 
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('de')}
                className={i18n.language === 'de' ? 'active' : ''}
              >
                DE
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.createdBy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;