import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
import {
  resetPasswordSend,
  resetPasswordSuccessSet
} from '../store/actions/PasswordResetActions';
import { RESPONSE_STATES, NAVIGATION_DELAY_TIME } from '../constants';
import {
  makeSelectPasswordLoader,
  makeSelectResetPasswordSuccess
} from '../store/selectors/PasswordResetSelector';
import { useRouter } from 'next/dist/client/router';
import { PAGES } from '../constants/routes';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector(makeSelectPasswordLoader());
  const resetPasswordSuccess = useSelector(makeSelectResetPasswordSuccess());

  const handleResetPassword = useCallback(
    data =>
      dispatch(
        resetPasswordSend({
          ...data,
          token: router.query.forgot_password_token
        })
      ),
    [dispatch]
  );
  const handleResetResetPasswordState = () =>
    dispatch(resetPasswordSuccessSet(RESPONSE_STATES.NO_RESPONSE));

  useEffect(() => {
    if (resetPasswordSuccess === RESPONSE_STATES.SUCCESS) {
      setTimeout(() => {
        router.push(PAGES.SIGN_IN);
      }, NAVIGATION_DELAY_TIME);
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    return () => handleResetResetPasswordState();
  }, []);

  const resetPasswordError =
    resetPasswordSuccess !== RESPONSE_STATES.NO_RESPONSE &&
    resetPasswordSuccess !== RESPONSE_STATES.SUCCESS;

  return (
    <div>
      Reset Password
      <ResetPasswordForm
        resetPasswordError={resetPasswordError ? resetPasswordSuccess : false}
        isLoading={isLoading}
        onSubmit={handleResetPassword}
      />
      {resetPasswordSuccess === RESPONSE_STATES.SUCCESS && (
        <p>{$t('auth.passwordResetSucces')}</p>
      )}
    </div>
  );
};

export default ResetPassword;
