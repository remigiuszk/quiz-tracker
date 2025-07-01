import i18n from "i18next";
import en from "./locale-json/en.json";
import pl from "./locale-json/pl.json";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

const getDeviceLanguage = () => {
  const locales = getLocales();
  return locales[0]?.languageCode || "en";
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: getDeviceLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const i18nLocale = i18n;
