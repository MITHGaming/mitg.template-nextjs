import { LangStrings } from '@/content/language';
import {
  defaultLocale,
  LanguageContext,
  locales,
} from '@/contexts/LanguageContext';
import { useContext } from 'react';

export const useTranslation = () => {
  const { locale, setLocale } = useContext(LanguageContext);

  const t = (key: string) => {
    if (!LangStrings[locale][key]) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || ``;
  };

  const changeLanguage = (language: string) => {
    if (locales.includes(language)) {
      localStorage.setItem(`language`, language);
      setLocale(language);
    } else {
      console.warn(`Language "${language}" not found`);
    }
  };

  return { t, locale, changeLanguage, locales };
};

export default useTranslation;
