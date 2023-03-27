import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import sp from './sp/sp.json';
import it from './it/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sp: { translation: sp },
      it: { translation: it }
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: { escapeValue: false }
  });

export default i18n;
