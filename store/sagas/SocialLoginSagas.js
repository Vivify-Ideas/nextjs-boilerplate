import { put, call } from 'redux-saga/effects';
import Router from 'next/router';

import AuthService from '../../services/AuthService';
import { userAuthStatusSet, userGet } from '../actions/UserActions';
import { PAGES } from '../../constants/routes';

export function* handleFacebookLogin({ payload }) {
  try {
    yield call(AuthService.facebookLogin, payload);

    yield put(userAuthStatusSet(true));
    yield put(userGet());

    Router.push(PAGES.HOME);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGoogleLogin({ payload }) {
  try {
    yield call(AuthService.googleLogin, payload);

    yield put(userAuthStatusSet(true));
    yield put(userGet());

    Router.push(PAGES.HOME);
  } catch (error) {
    console.log(error);
  }
}
