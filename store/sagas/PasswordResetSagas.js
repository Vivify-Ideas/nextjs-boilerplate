import { put, call } from 'redux-saga/effects';

import {
  passwordLoaderSet,
  forgotPasswordSuccessSet,
  resetPasswordSuccessSet
} from '../actions/PasswordResetActions';
import AuthService from '../../services/AuthService';
import { RESPONSE_STATES } from '../../constants';

export function* handleForgotPassword({ payload }) {
  try {
    yield put(forgotPasswordSuccessSet(RESPONSE_STATES.NO_RESPONSE));
    yield put(passwordLoaderSet(true));
    yield call(AuthService.forgotPassword, payload);
    yield put(forgotPasswordSuccessSet(RESPONSE_STATES.SUCCESS));
  } catch (error) {
    console.log(error);
    yield put(forgotPasswordSuccessSet(error.response.data.errors));
  } finally {
    yield put(passwordLoaderSet(false));
  }
}

export function* handleResetPassword({ payload }) {
  try {
    yield put(resetPasswordSuccessSet(RESPONSE_STATES.NO_RESPONSE));
    yield put(passwordLoaderSet(true));
    yield call(AuthService.resetPassword, payload);
    yield put(resetPasswordSuccessSet(RESPONSE_STATES.SUCCESS));
  } catch (error) {
    console.log(error);
    yield put(resetPasswordSuccessSet(error.response.data.errors));
  } finally {
    yield put(passwordLoaderSet(false));
  }
}
