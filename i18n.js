const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en'
  },
  all: {
    en: 'en'
  }
};

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  debug: process.env.NODE_ENV === 'development',
  lng: 'en',
  initImmediate: true,
  // load: 'all',
  ignoreRoutes: []
});
