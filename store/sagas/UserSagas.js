import { put, call } from 'redux-saga/effects';
import Router from 'next/router';

import {
  userLoaderSet,
  userSet,
  userAuthStatusSet,
  setPasswordLoader,
  setChangePasswordSuccess
} from '../actions/UserActions';
import UserService from '../../services/UserService';
import AuthService from '../../services/AuthService';
import { PAGES } from '../../constants/routes';
import { RESPONSE_STATES } from '../../constants';

export function* handleUserGet() {
  try {
    yield put(userLoaderSet(true));
    const { data } = yield call(UserService.me);
    yield put(userSet(data));
    yield put(userAuthStatusSet(true));
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      yield put(userAuthStatusSet(false));
    }
    console.log(error);
  } finally {
    yield put(userLoaderSet(false));
  }
}

export function* handleUserSignOut() {
  try {
    yield put(userLoaderSet(true));
    yield call(AuthService.logout);

    yield put(userAuthStatusSet(false));
    yield put(userSet({}));
    Router.push(PAGES.HOME);
  } catch (error) {
    console.log(error);
  } finally {
    yield put(userLoaderSet(false));
  }
}

export function* handleUserEdit({ payload }) {
  try {
    yield put(userLoaderSet(true));

    const { data } = yield call(UserService.edit, payload);
    yield put(userSet(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(userLoaderSet(false));
  }
}

export function* handlePasswordChange({ payload }) {
  try {
    yield put(setChangePasswordSuccess(RESPONSE_STATES.NO_RESPONSE));
    yield put(setPasswordLoader(true));
    yield call(UserService.changePassword, payload);
    yield put(setChangePasswordSuccess(RESPONSE_STATES.SUCCESS));
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setChangePasswordSuccess(RESPONSE_STATES.ERROR));
    } else {
      console.log(error);
    }
  } finally {
    yield put(setPasswordLoader(false));
  }
}
