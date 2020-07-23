import * as Yup from 'yup';

import { PASSWORD_MINIMUM_LENGTH } from '../constants/validation';

export const signInValidationRules = ({ t }) =>
  Yup.object().shape({
    email: Yup.string()
      .required(t('emailIsRequired'))
      .email(t('mustBeValidEmail')),
    password: Yup.string()
      .required(t('passwordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('passwordMinCharacters', {
          min: PASSWORD_MINIMUM_LENGTH
        })
      )
  });

export const signUpValidationRules = ({ t }) =>
  Yup.object().shape({
    first_name: Yup.string().required(t('firstNameIsRequired')),
    last_name: Yup.string().required(t('lastNameIsRequired')),
    email: Yup.string()
      .required(t('emailIsRequired'))
      .email(t('mustBeValidEmail')),
    password: Yup.string()
      .required(t('passwordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('passwordMinCharacters', {
          min: PASSWORD_MINIMUM_LENGTH
        })
      ),
    confirm_password: Yup.string()
      .required(t('confirmPasswordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('confirmPasswordMinCharacters', {
          min: PASSWORD_MINIMUM_LENGTH
        })
      )
      .oneOf([Yup.ref('password'), null], t('auth.passwordsMustMatch'))
  });

export const forgotPasswordValidationRules = ({ t }) =>
  Yup.object().shape({
    email: Yup.string()
      .required(t('emailIsRequired'))
      .email(t('mustBeValidEmail'))
  });

export const resetPasswordValidationRules = ({ t }) =>
  Yup.object().shape({
    password: Yup.string()
      .required(t('passwordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('passwordMinCharacters', {
          min: PASSWORD_MINIMUM_LENGTH
        })
      ),
    password_confirmation: Yup.string()
      .required(t('confirmPasswordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('confirmPasswordMinCharacters', {
          min: PASSWORD_MINIMUM_LENGTH
        })
      )
      .oneOf([Yup.ref('password'), null], t('auth.passwordsMustMatch'))
  });
