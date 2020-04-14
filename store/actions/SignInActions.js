import {
  SIGN_IN,
  SIGN_IN_LOADER_SET,
  SIGN_IN_ERROR_SET
} from '../actionTypes/SignInActionTypes';

export const signIn = payload => ({
  type: SIGN_IN,
  payload
});

export const signInLoaderSet = payload => ({
  type: SIGN_IN_LOADER_SET,
  payload
});

export const signInErrorSet = payload => ({
  type: SIGN_IN_ERROR_SET,
  payload
});
