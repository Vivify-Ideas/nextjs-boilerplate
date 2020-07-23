import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { signInValidationRules } from '../../validation/auth';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

export const SignInForm = ({ onSubmit, signInError, isLoading }) => {
  const { t } = useTranslation('auth');
  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={signInValidationRules({ t })}
      >
        {() => (
          <Form>
            <Field
              name="email"
              component={TextInputWithLabel}
              placeholder={t('enterEmail')}
            />
            <Field
              name="password"
              component={PasswordInputWithLabel}
              placeholder={t('enterPassword')}
            />
            {signInError && <p>{t('invalidCredentials')}</p>}
            <button type="submit">
              <p>{t('signIn')}</p>
            </button>
          </Form>
        )}
      </Formik>
    </LoaderWrapper>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool,
  isLoading: PropTypes.bool
};
