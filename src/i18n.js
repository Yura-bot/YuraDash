import { createI18n } from 'vue-i18n'

const messages = {
  en: require('./locales/en.json'),
  fr: require('./locales/fr.json'),
  es: require('./locales/es.json'),
  de: require('./locales/de.json')
}

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || navigator.language || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages
})
