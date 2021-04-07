import React from 'react';

import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
import { useTranslation } from '../i18n';
import { useResetPassword } from '../queries/auth/auth';

const ResetPassword = () => {
  const { t } = useTranslation();
  const { isLoading, error, mutate, isSuccess } = useResetPassword();

  return (
    <div>
      Reset Password
      <ResetPasswordForm
        error={error}
        isLoading={isLoading}
        onSubmit={mutate}
      />
      {isSuccess && <p>{t('auth.passwordResetSucces')}</p>}
    </div>
  );
};

export default ResetPassword;
