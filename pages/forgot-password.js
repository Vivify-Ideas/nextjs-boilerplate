import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import {
  makeSelectPasswordLoader,
  makeSelectForgotPasswordSuccess
} from '../store/selectors/PasswordResetSelector';
import {
  forgotPasswordSend,
  forgotPasswordSuccessSet
} from '../store/actions/PasswordResetActions';
import { RESPONSE_STATES } from '../constants';
import { useTranslation } from '../i18n';

const ForgotPassword = () => {
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectPasswordLoader());
  const forgotPasswordSuccess = useSelector(makeSelectForgotPasswordSuccess());

  const handleForgotPassword = useCallback(
    (data) => dispatch(forgotPasswordSend(data)),
    [dispatch]
  );
  const handleResetForgotPasswordState = () =>
    dispatch(forgotPasswordSuccessSet(RESPONSE_STATES.NO_RESPONSE));

  useEffect(() => () => handleResetForgotPasswordState(), []);

  const forgotPasswordError =
    forgotPasswordSuccess !== RESPONSE_STATES.NO_RESPONSE &&
    forgotPasswordSuccess !== RESPONSE_STATES.SUCCESS;

  return (
    <div>
      Forgot Password
      <ForgotPasswordForm
        onSubmit={handleForgotPassword}
        isLoading={isLoading}
        forgotPasswordError={forgotPasswordError && forgotPasswordSuccess}
      />
      {forgotPasswordSuccess === RESPONSE_STATES.SUCCESS && (
        <p>{t('forgotPasswordSuccess')}</p>
      )}
    </div>
  );
};

export default ForgotPassword;
