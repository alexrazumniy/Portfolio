import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../public/locales/en/translation.json";
import translationRU from "../public/locales/ru/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        supportedLngs: ["en", "ru", "ua"],
        fallbackLng: "en",
        detection: {
            order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
            caches: ["cookie"]
        },

    });

export default i18n;