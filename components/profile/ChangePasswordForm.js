import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import { changePasswordValidationRules } from '../../validation/profile';
import $t from '../../i18n';
import LoaderWrapper from '../shared/LoaderWrapper';

const ChangePasswordForm = ({
  onSubmit,
  isLoading,
  passwordErrors,
  completed
}) => (
  <LoaderWrapper isLoading={isLoading}>
    <Formik
      initialValues={{
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      }}
      onSubmit={onSubmit}
      validationSchema={changePasswordValidationRules}
    >
      {() => (
        <Form>
          <Field
            name="current_password"
            component={PasswordInputWithLabel}
            placeholder={$t('profile.changePassword.currentPassword')}
          />
          {!!passwordErrors && (
            <p>{$t('profile.changePassword.invalidOldPassword')}</p>
          )}
          <Field
            name="new_password"
            component={PasswordInputWithLabel}
            placeholder={$t('profile.changePassword.newPassword')}
          />
          <Field
            name="new_password_confirmation"
            component={PasswordInputWithLabel}
            placeholder={$t('profile.changePassword.confirmNewPassword')}
          />
          <button type="submit">
            <p>{$t('profile.changePassword.change')}</p>
          </button>
        </Form>
      )}
    </Formik>
    {!passwordErrors && completed && (
      <p>{$t('profile.changePassword.success')}</p>
    )}
  </LoaderWrapper>
);

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  completed: PropTypes.bool,
  passwordErrors: PropTypes.object
};

export default ChangePasswordForm;
