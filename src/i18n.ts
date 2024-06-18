import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/lang.json';
import km from './assets/locales/km/lang.json';
import cn from './assets/locales/cn/lang.json';
import { getLocalLanguage } from './utils/language';

const initLang = getLocalLanguage() ?? 'en';
const resources = {
  en: {
    lang: en,
  },
  km: {
    lang: km,
  },
  cn: {
    lang: cn,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: initLang, //default language,
  fallbackLng: 'en',
  defaultNS: 'lang',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18next;
export const trans = i18next.t;
