import React from 'react';

import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import $t from '../i18n';
import { useAuthStore } from '../store';

const ForgotPassword = () => {
  const { forgotPassword, actions } = useAuthStore([
    'forgotPassword',
    'actions'
  ]);
  const { loader: isLoading, error: forgotPasswordErrors } = forgotPassword;

  return (
    <div>
      Forgot Password
      <ForgotPasswordForm
        onSubmit={actions.forgotPassword}
        isLoading={isLoading}
        forgotPasswordError={!!forgotPasswordErrors}
      />
      {!forgotPasswordErrors && <p>{$t('auth.forgotPasswordSuccess')}</p>}
    </div>
  );
};

export default ForgotPassword;
