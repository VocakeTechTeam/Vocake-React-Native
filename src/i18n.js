// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Enables loading translations from a backend
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    lng: 'en', // Initial language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      // Load translations from your backend or local files
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Adjust this path based on your setup
    },
  });

export default i18n;
