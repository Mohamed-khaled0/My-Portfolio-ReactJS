/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag } from 'react-icons/fa'; // Import the flag icons
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className="lang-button"
        onClick={() => changeLanguage('en')}
        title="Switch to English"
      >
        <FaFlagUsa /> {/* USA Flag for English */}
      </button>
      <button
        className="lang-button"
        onClick={() => changeLanguage('de')}
        title="Switch to Deutsch"
      >
        <FaFlag /> {/* Germany Flag for Deutsch */}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
