import React from 'react';

import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import { useTranslation } from '../i18n';
import { useForgotPassword } from '../queries/auth/auth';

const ForgotPassword = () => {
  const { t } = useTranslation('auth');

  const { isLoading, error, mutate, isSuccess } = useForgotPassword();

  return (
    <div>
      Forgot Password
      <ForgotPasswordForm
        onSubmit={mutate}
        isLoading={isLoading}
        error={error}
      />
      {isSuccess && <p>{t('forgotPasswordSuccess')}</p>}
    </div>
  );
};

export default ForgotPassword;
