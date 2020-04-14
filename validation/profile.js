import * as Yup from 'yup';

import $t from '../i18n';

export const updateProfileValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t('validation.firstNameIsRequired')),
  last_name: Yup.string().required($t('validation.lastNameIsRequired'))
});
