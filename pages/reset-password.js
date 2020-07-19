import React from 'react';

import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
import { useAuthStore } from '../store/AuthStore';
import $t from '../i18n';

const ResetPassword = () => {
  const { isLoading, resetPasswordErrors, actions } = useAuthStore((state) => ({
    isLoading: state.resetPassword.loader,
    resetPasswordErrors: state.resetPassword.error,
    actions: state.actions
  }));

  return (
    <div>
      Reset Password
      <ResetPasswordForm
        resetPasswordError={!!resetPasswordErrors}
        isLoading={isLoading}
        onSubmit={actions.resetPassword}
      />
      {!resetPasswordErrors && <p>{$t('auth.passwordResetSucces')}</p>}
    </div>
  );
};

export default ResetPassword;
