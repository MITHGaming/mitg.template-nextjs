/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FC, useEffect, useState } from 'react';

export const defaultLocale = `ptBr`;
export const locales = [`ptBr`, `enUs`];

type LanguageContextProps = {
  locale: string;
  setLocale: (locale: string) => void;
};
export const LanguageContext = createContext<LanguageContextProps>({
  locale: defaultLocale,
  setLocale: () => {},
});

export const LanguageProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem(`language`) || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
