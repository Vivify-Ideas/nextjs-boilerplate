import {
  SIGN_UP,
  SIGN_UP_LOADER_SET,
  SIGN_UP_ERROR_SET
} from '../actionTypes/SignUpActionTypes';

export const signUp = payload => ({
  type: SIGN_UP,
  payload
});

export const signUpLoaderSet = payload => ({
  type: SIGN_UP_LOADER_SET,
  payload
});

export const signUpErrorSet = payload => ({
  type: SIGN_UP_ERROR_SET,
  payload
});
