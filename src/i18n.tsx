import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import enTranslation from "../public/locales/en.json";
import { Language } from "./utils/defination";

const language = localStorage.getItem("i18nextLng") || Language.ENG;

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: language,
    debug: true,
    resources: {
      uzb: { translation: uzTranslation },
      rus: { translation: ruTranslation },
      eng: { translation: enTranslation },
    },
  });

export default i18n;
