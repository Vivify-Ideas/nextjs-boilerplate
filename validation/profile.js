import * as Yup from 'yup';

import $t from '../i18n';
import { PASSWORD_MINIMUM_LENGTH } from '../constants/validation';

export const updateProfileValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t('validation.firstNameIsRequired')),
  last_name: Yup.string().required($t('validation.lastNameIsRequired'))
});

export const changePasswordValidationRules = Yup.object().shape({
  current_password: Yup.string()
    .required($t('validation.currentPasswordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.currentPasswordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    ),
  new_password: Yup.string()
    .required($t('validation.newPasswordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.newPasswordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    ),
  new_password_confirmation: Yup.string()
    .required($t('validation.newPasswordConfirmationIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.newPasswordConfirmationMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    )
    .oneOf([Yup.ref('new_password'), null], $t('auth.passwordsMustMatch'))
});
