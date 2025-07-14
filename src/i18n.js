import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  // Load translations using http (default public/locales)
  .use(HttpBackend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language
    lng: 'en', // Default language
    debug: true, // Set to false in production

    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    ns: [
      'footer',
      'header',
      'hero',
      'main',
      'skills',
      'experience',
      'education',
      'certifications',
      'contact'
      // Add more namespaces as you create them
    ],
    // defaultNS: 'footer', 
    react: {
      useSuspense: false, // Set to true if using Suspense
    },
  });

export default i18n;
