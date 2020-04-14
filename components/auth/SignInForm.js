import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { signInValidationRules } from '../../validation/auth';
import $t from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

export const SignInForm = ({ onSubmit, signInError, isLoading }) => (
  <LoaderWrapper isLoading={isLoading}>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={signInValidationRules}
    >
      {() => (
        <Form>
          <Field
            name="email"
            component={TextInputWithLabel}
            placeholder={$t('auth.enterEmail')}
          />
          <Field
            name="password"
            component={PasswordInputWithLabel}
            placeholder={$t('auth.enterPassword')}
          />
          {signInError && <p>{$t('auth.invalidCredentials')}</p>}
          <button type="submit">
            <p>{$t('auth.signIn')}</p>
          </button>
        </Form>
      )}
    </Formik>
  </LoaderWrapper>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool,
  isLoading: PropTypes.bool
};
