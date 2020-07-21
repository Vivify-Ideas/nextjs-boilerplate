import React from 'react';

import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
import { useAuthStore } from '../store';
import $t from '../i18n';

const ResetPassword = () => {
  const { resetPassword, actions } = useAuthStore(['resetPassword', 'actions']);
  const { loader: isLoading, error: resetPasswordErrors } = resetPassword;

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
