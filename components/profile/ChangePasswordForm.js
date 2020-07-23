import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import { changePasswordValidationRules } from '../../validation/profile';
import { useTranslation } from '../../i18n';
import LoaderWrapper from '../shared/LoaderWrapper';
import { RESPONSE_STATES } from '../../constants';

const ChangePasswordForm = ({ onSubmit, isLoading, passwordChangeState }) => {
  const { t } = useTranslation('profile');
  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        initialValues={{
          current_password: '',
          new_password: '',
          new_password_confirmation: ''
        }}
        onSubmit={onSubmit}
        validationSchema={changePasswordValidationRules({ t })}
      >
        {() => (
          <Form>
            <Field
              name="current_password"
              component={PasswordInputWithLabel}
              placeholder={t('currentPassword')}
            />
            {passwordChangeState === RESPONSE_STATES.ERROR && (
              <p>{t('invalidOldPassword')}</p>
            )}
            <Field
              name="new_password"
              component={PasswordInputWithLabel}
              placeholder={t('newPassword')}
            />
            <Field
              name="new_password_confirmation"
              component={PasswordInputWithLabel}
              placeholder={t('confirmNewPassword')}
            />
            <button type="submit">
              <p>{t('change')}</p>
            </button>
          </Form>
        )}
      </Formik>
      {passwordChangeState === RESPONSE_STATES.SUCCESS && (
        <p>{t('passwordChangedSuccess')}</p>
      )}
    </LoaderWrapper>
  );
};

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  passwordChangeState: PropTypes.number
};

export default ChangePasswordForm;
