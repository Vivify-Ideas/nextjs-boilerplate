import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { signUpValidationRules } from '../../validation/auth';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import $t from '../../i18n';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

export const SignUpForm = ({ onSubmit, signUpErrors, isLoading }) => (
  <LoaderWrapper isLoading={isLoading}>
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      }}
      onSubmit={onSubmit}
      validationSchema={signUpValidationRules}
    >
      {() => (
        <Form>
          <Field
            name="first_name"
            component={TextInputWithLabel}
            placeholder={$t('auth.enterFirstName')}
          />
          <Field
            name="last_name"
            component={TextInputWithLabel}
            placeholder={$t('auth.enterLastName')}
          />
          <Field
            name="email"
            component={TextInputWithLabel}
            placeholder={$t('auth.enterEmail')}
          />
          {!!signUpErrors?.email && <p>{signUpErrors?.email}</p>}
          <Field
            name="password"
            component={PasswordInputWithLabel}
            placeholder={$t('auth.enterPassword')}
          />
          <Field
            name="confirm_password"
            component={PasswordInputWithLabel}
            placeholder={$t('auth.confirmPassword')}
          />
          <button type="submit">
            <p>{$t('auth.signUp')}</p>
          </button>
        </Form>
      )}
    </Formik>
  </LoaderWrapper>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object,
  isLoading: PropTypes.bool
};
