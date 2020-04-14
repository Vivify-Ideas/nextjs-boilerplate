import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { resetPasswordValidationRules } from '../../validation/auth';
import $t from '../../i18n';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';
import ServerErrors from '../shared/ServerErrors';

export const ResetPasswordForm = ({
  onSubmit,
  resetPasswordError,
  isLoading
}) => (
  <LoaderWrapper isLoading={isLoading}>
    <Formik
      initialValues={{ password: '', password_confirmation: '' }}
      onSubmit={onSubmit}
      validationSchema={resetPasswordValidationRules}
    >
      {() => (
        <Form>
          <Field
            name="password"
            component={PasswordInputWithLabel}
            placeholder={$t('auth.enterNewPass')}
          />
          <Field
            name="password_confirmation"
            component={PasswordInputWithLabel}
            placeholder={$t('auth.confirmPass')}
          />
          {resetPasswordError && <ServerErrors errors={resetPasswordError} />}
          <button type="submit">
            <p>{$t('common.submit')}</p>
          </button>
        </Form>
      )}
    </Formik>
  </LoaderWrapper>
);

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};
