import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../public/locales/en/translation.json";
import translationRU from "../public/locales/ru/translation.json";
import translationUA from "../public/locales/ua/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    },
    ua: {
        translation: translationUA
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
            order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
            caches: ["localStorage"]
        },

    });

export default i18n;