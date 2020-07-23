import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { signUpValidationRules } from '../../validation/auth';
import { useTranslation } from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

export const SignUpForm = ({ onSubmit, signUpErrors, isLoading }) => {
  const { t } = useTranslation('auth');
  return (
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
        validationSchema={signUpValidationRules({ t })}
      >
        {() => (
          <Form>
            <Field
              name="first_name"
              component={TextInputWithLabel}
              placeholder={t('enterFirstName')}
            />
            <Field
              name="last_name"
              component={TextInputWithLabel}
              placeholder={t('enterLastName')}
            />
            <Field
              name="email"
              component={TextInputWithLabel}
              placeholder={t('enterEmail')}
            />
            {!!signUpErrors.email && <p>{signUpErrors.email}</p>}
            <Field
              name="password"
              component={PasswordInputWithLabel}
              placeholder={t('enterPassword')}
            />
            <Field
              name="confirm_password"
              component={PasswordInputWithLabel}
              placeholder={t('confirmPassword')}
            />
            <button type="submit">
              <p>{t('signUp')}</p>
            </button>
          </Form>
        )}
      </Formik>
    </LoaderWrapper>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object,
  isLoading: PropTypes.bool
};
