import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default {
  ...publicRuntimeConfig,
  IS_DEV: process.env.NODE_ENV === 'development'
};
