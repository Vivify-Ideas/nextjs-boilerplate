import { put, call } from 'redux-saga/effects';
import Router from 'next/router';

import { signUpErrorSet, signUpLoaderSet } from '../actions/SignUpActions';
import AuthService from '../../services/AuthService';
import { userAuthStatusSet } from '../actions/UserActions';
import { PAGES } from '../../constants/routes';
import { userGet } from '../actions/UserActions';

export function* handleSignUp({ payload }) {
  try {
    yield put(signUpLoaderSet(true));
    yield put(signUpErrorSet({}));
    yield call(AuthService.signUp, payload);

    yield put(userAuthStatusSet(true));
    yield put(userGet());

    Router.push(PAGES.HOME);
  } catch (error) {
    if (error.response.status === 422) {
      yield put(signUpErrorSet(error.response.data.errors));
    } else {
      console.log(error);
    }
  } finally {
    yield put(signUpLoaderSet(false));
  }
}
