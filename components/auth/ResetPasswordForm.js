import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { resetPasswordValidationRules } from '../../validation/auth';
import { useTranslation } from '../../i18n';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';
import ServerErrors from '../shared/ServerErrors';

export const ResetPasswordForm = ({
  onSubmit,
  resetPasswordError,
  isLoading
}) => {
  const { t } = useTranslation('auth');

  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        initialValues={{ password: '', password_confirmation: '' }}
        onSubmit={onSubmit}
        validationSchema={resetPasswordValidationRules({ t })}
      >
        {() => (
          <Form>
            <Field
              name="password"
              component={PasswordInputWithLabel}
              placeholder={t('enterNewPass')}
            />
            <Field
              name="password_confirmation"
              component={PasswordInputWithLabel}
              placeholder={t('confirmPass')}
            />
            {resetPasswordError && <ServerErrors errors={resetPasswordError} />}
            <button type="submit">
              <p>{t('submit', { ns: 'common' })}</p>
            </button>
          </Form>
        )}
      </Formik>
    </LoaderWrapper>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  resetPasswordError: PropTypes.object
};
