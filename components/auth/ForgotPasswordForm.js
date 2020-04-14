import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { forgotPasswordValidationRules } from '../../validation/auth';
import $t from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

export const ForgotPasswordForm = ({
  onSubmit,
  forgotPasswordError,
  isLoading
}) => (
  <LoaderWrapper isLoading={isLoading}>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
      validationSchema={forgotPasswordValidationRules}
    >
      {() => (
        <Form>
          <Field
            name="email"
            component={TextInputWithLabel}
            placeholder={$t('auth.enterEmail')}
          />
          {forgotPasswordError.email && <p>{forgotPasswordError.email[0]}</p>}
          <button type="submit">
            <p>{$t('common.submit')}</p>
          </button>
        </Form>
      )}
    </Formik>
  </LoaderWrapper>
);

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  forgotPasswordError: PropTypes.bool,
  isLoading: PropTypes.bool
};
