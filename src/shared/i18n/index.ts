import en from './en.json';
import zh from './zh.json';

const translations = {
  en,
  zh,
};

export type Locale = keyof typeof translations;
export type TranslationKeys = keyof typeof en;

export function useTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en;
}

export function t(key: string, locale: Locale = 'en') {
  const keys = key.split('.');
  let result: any = translations[locale] || translations.en;
  
  for (const k of keys) {
    if (result[k] === undefined) {
      return key;
    }
    result = result[k];
  }
  
  return result;
}
