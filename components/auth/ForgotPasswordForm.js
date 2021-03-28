import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { forgotPasswordValidationRules } from '../../validation/auth';
import { useTranslation } from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';
import ServerErrors from '../shared/ServerErrors';

export const ForgotPasswordForm = ({ onSubmit, error, isLoading }) => {
  const { t } = useTranslation('auth');

  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        validationSchema={forgotPasswordValidationRules({ t })}
      >
        <Form>
          <Field
            name="email"
            component={TextInputWithLabel}
            placeholder={t('enterEmail')}
          />
          {error && <ServerErrors errors={error} />}
          <button type="submit">
            <p>{t('submit', { ns: 'common' })}</p>
          </button>
        </Form>
      </Formik>
    </LoaderWrapper>
  );
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  isLoading: PropTypes.bool
};
