import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    // lng: "en",  if you're using a language detector, do not define the lng option
    supportedLngs: ["en", "fr"],
    fallbackLng: "fr",
    order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'], //lang detection
    caches: ['cookie'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
      wait: true
    },
    ns: ['common', 'home','login'],
    defaultNS: 'common',
    nsSeparator: false,
    keySeparator: false,



  });