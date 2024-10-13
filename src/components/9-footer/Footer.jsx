/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from 'react-i18next';
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#main">{t('footer.home')}</a>
        </li>
        <li>
          <a href="#projects">{t('footer.projects')}</a>
        </li>
        <li>
          <a href="#skills">{t('footer.skills')}</a>
        </li>
        <li>
          <a href="#experience">{t('footer.experience')}</a>
        </li>
        <li>
          <a href="#education">{t('footer.education')}</a>
        </li>
        <li>
          <a href="#contact">{t('footer.contact')}</a>
        </li>
      </ul>

      <p>{t('footer.createdBy')}</p>
    </footer>
  );
}
