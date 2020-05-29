import {
  USER_GET,
  USER_SET,
  USER_LOADER_SET,
  USER_AUTH_STATUS_SET,
  USER_SIGN_OUT,
  USER_EDIT,
  PASSWORD_CHANGE,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_LOADER_SET
} from '../actionTypes/UserActionTypes';

export const userGet = () => ({
  type: USER_GET
});

export const userSet = payload => ({
  type: USER_SET,
  payload
});

export const userLoaderSet = payload => ({
  type: USER_LOADER_SET,
  payload
});

export const userAuthStatusSet = payload => ({
  type: USER_AUTH_STATUS_SET,
  payload
});

export const userSignOut = () => ({
  type: USER_SIGN_OUT
});

export const userEdit = payload => ({
  type: USER_EDIT,
  payload
});

export const changePassword = payload => ({
  type: PASSWORD_CHANGE,
  payload
});

export const setChangePasswordSuccess = payload => ({
  type: PASSWORD_CHANGE_SUCCESS,
  payload
});

export const setPasswordLoader = payload => ({
  type: PASSWORD_CHANGE_LOADER_SET,
  payload
});
