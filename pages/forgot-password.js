import React from 'react';

import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import $t from '../i18n';
import { useAuthStore } from '../store/AuthStore';

const ForgotPassword = () => {
  const { isLoading, forgotPasswordErrors, actions } = useAuthStore(
    (state) => ({
      isLoading: state.forgotPassword.loader,
      forgotPasswordErrors: state.forgotPassword.error,
      actions: state.actions
    })
  );

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
