import i18n from 'i18n-js';

import en from './locale/en';

i18n.fallbacks = true;

i18n.translations = {
  en
};

export default function $t(key, params = {}) {
  return i18n.t(key, params);
}
