import {
  FORGOT_PASSWORD_SEND,
  RESET_PASSWORD_SEND,
  PASSWORD_LOADER_SET,
  FORGOT_PASSWORD_SUCCESS_SET,
  RESET_PASSWORD_SUCCESS_SET
} from '../actionTypes/PasswordResetActionTypes';

export const forgotPasswordSend = payload => ({
  type: FORGOT_PASSWORD_SEND,
  payload
});

export const forgotPasswordSuccessSet = payload => ({
  type: FORGOT_PASSWORD_SUCCESS_SET,
  payload
});

export const resetPasswordSend = payload => ({
  type: RESET_PASSWORD_SEND,
  payload
});

export const resetPasswordSuccessSet = payload => ({
  type: RESET_PASSWORD_SUCCESS_SET,
  payload
});

export const passwordLoaderSet = payload => ({
  type: PASSWORD_LOADER_SET,
  payload
});
