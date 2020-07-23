import * as Yup from 'yup';

import { PASSWORD_MINIMUM_LENGTH } from '../constants/validation';

export const updateProfileValidationRules = ({ t }) =>
  Yup.object().shape({
    first_name: Yup.string().required(t('firstNameIsRequired', { ns: 'auth' })),
    last_name: Yup.string().required(t('lastNameIsRequired', { ns: 'auth' }))
  });

export const changePasswordValidationRules = ({ t }) =>
  Yup.object().shape({
    current_password: Yup.string()
      .required(t('currentPasswordIsRequired', { ns: 'auth' }))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('currentPasswordMinCharacters', {
          ns: 'auth',
          min: PASSWORD_MINIMUM_LENGTH
        })
      ),
    new_password: Yup.string()
      .required(t('newPasswordIsRequired'))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('newPasswordMinCharacters', {
          ns: 'auth',
          min: PASSWORD_MINIMUM_LENGTH
        })
      ),
    new_password_confirmation: Yup.string()
      .required(t('newPasswordConfirmationIsRequired', { ns: 'auth' }))
      .min(
        PASSWORD_MINIMUM_LENGTH,
        t('newPasswordConfirmationMinCharacters', {
          ns: 'auth',
          min: PASSWORD_MINIMUM_LENGTH
        })
      )
      .oneOf(
        [Yup.ref('new_password'), null],
        t('passwordsMustMatch', { ns: 'auth' })
      )
  });
