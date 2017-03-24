import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const startI18n = file => {
  return i18n
  // .use(Cache)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: file,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,
    backend: {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      test: '{{ng}}'
    },

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });
}

export default startI18n;