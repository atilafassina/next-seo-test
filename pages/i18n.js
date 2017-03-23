import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
// import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(XHR)
  // .use(Cache)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,
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

export default i18n;