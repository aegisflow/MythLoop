import { locales, LocaleKey } from './locales';

let currentLocale: LocaleKey = 'en';

// Auto-detect user language
const detectLocale = (): LocaleKey => {
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt-BR';
  if (locales[browserLang as LocaleKey]) return browserLang as LocaleKey;
  return 'en';
};

export const i18n = {
  setLocale: (locale: LocaleKey) => {
    currentLocale = locale;
    localStorage.setItem('mythloop_locale', locale);
    window.dispatchEvent(new Event('localeChanged'));
  },
  
  getLocale: (): LocaleKey => {
    const saved = localStorage.getItem('mythloop_locale') as LocaleKey | null;
    return saved || detectLocale();
  },
  
  t: (key: string): string => {
    const keys = key.split('.');
    let value: any = locales[currentLocale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Fallback to key if not found
  },
  
  getAllLocales: (): LocaleKey[] => {
    return Object.keys(locales) as LocaleKey[];
  },
};

// Initialize on load
i18n.setLocale(i18n.getLocale());
