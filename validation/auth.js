import * as Yup from 'yup';

import $t from '../i18n';
import { PASSWORD_MINIMUM_LENGTH } from '../constants/validation';

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail')),
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.passwordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    )
});

export const signUpValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t('validation.firstNameIsRequired')),
  last_name: Yup.string().required($t('validation.lastNameIsRequired')),
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail')),
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.passwordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    ),
  confirm_password: Yup.string()
    .required($t('validation.confirmPasswordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.confirmPasswordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    )
    .oneOf([Yup.ref('password'), null], $t('auth.passwordsMustMatch'))
});

export const forgotPasswordValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail'))
});

export const resetPasswordValidationRules = Yup.object().shape({
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.passwordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    ),
  password_confirmation: Yup.string()
    .required($t('validation.confirmPasswordIsRequired'))
    .min(
      PASSWORD_MINIMUM_LENGTH,
      $t('validation.confirmPasswordMinCharacters', {
        min: PASSWORD_MINIMUM_LENGTH
      })
    )
    .oneOf([Yup.ref('password'), null], $t('auth.passwordsMustMatch'))
});
