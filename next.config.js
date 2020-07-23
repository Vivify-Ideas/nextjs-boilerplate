// next.config.js
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');

const dev = process.env.NODE_ENV !== 'production';

if (dev) {
  require('dotenv').config();
}

const nextConfig = {
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    API_BASE_URL: process.env.API_BASE_URL,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID
  }
};

module.exports = withPlugins([[css, {}]], nextConfig);
