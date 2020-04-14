import { put, call } from 'redux-saga/effects';
import Router from 'next/router';

import { signInLoaderSet, signInErrorSet } from '../actions/SignInActions';
import AuthService from '../../services/AuthService';
import { userAuthStatusSet } from '../actions/UserActions';
import { PAGES } from '../../constants/routes';
import { userGet } from '../actions/UserActions';

export function* handleSignIn({ payload }) {
  try {
    yield put(signInLoaderSet(true));
    yield put(signInErrorSet(false));
    yield call(AuthService.login, payload);

    yield put(userAuthStatusSet(true));
    yield put(userGet());

    Router.push(PAGES.HOME);
  } catch (error) {
    if (error.response.status === 401) {
      yield put(signInErrorSet(true));
    } else {
      console.log(error);
    }
  } finally {
    yield put(signInLoaderSet(false));
  }
}
