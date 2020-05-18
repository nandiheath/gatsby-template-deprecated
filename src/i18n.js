import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import translationsEN from '@/locales/en/translation.json'
import translationsZH from '@/locales/zh-hk/translation.json'
import translationsID from '@/locales/id-id/translation.json'
import translationsFR from '@/locales/fr/translation.json'
import translationsTL from '@/locales/tl-ph/translation.json'

export const createInstance = (lang) => {
  const instance = i18n.createInstance({
    resources: {
      'zh-HK': { translation: translationsZH },
      'en': { translation: translationsEN },
      'fr': { translation: translationsFR },
      'tl-PH': { translation: translationsTL },
      'id-ID': { translation: translationsID },
    },
    lng: lang,
    fallbackLng: 'zh-hk',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    keySeparator: '-',
  })
    .use(initReactI18next)

  instance.init();
  return instance;
}

export default createInstance('zh-hk');
