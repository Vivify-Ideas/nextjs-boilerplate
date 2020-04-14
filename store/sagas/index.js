import { all, takeLatest } from 'redux-saga/effects';
import { SIGN_IN } from '../actionTypes/SignInActionTypes';
import { handleSignIn } from './SignInSagas';
import { handleSignUp } from './SignUpSagas';
import { SIGN_UP } from '../actionTypes/SignUpActionTypes';
import {
  USER_GET,
  USER_SIGN_OUT,
  USER_EDIT
} from '../actionTypes/UserActionTypes';
import { handleUserGet, handleUserSignOut, handleUserEdit } from './UserSagas';
import {
  FORGOT_PASSWORD_SEND,
  RESET_PASSWORD_SEND
} from '../actionTypes/PasswordResetActionTypes';
import {
  handleResetPassword,
  handleForgotPassword
} from './PasswordResetSagas';
import {
  FACEBOOK_LOGIN,
  GOOGLE_LOGIN
} from '../actionTypes/SocialLoginActionTypes';
import { handleFacebookLogin, handleGoogleLogin } from './SocialLoginSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(USER_GET, handleUserGet),
    takeLatest(USER_SIGN_OUT, handleUserSignOut),
    takeLatest(FORGOT_PASSWORD_SEND, handleForgotPassword),
    takeLatest(RESET_PASSWORD_SEND, handleResetPassword),
    takeLatest(FACEBOOK_LOGIN, handleFacebookLogin),
    takeLatest(GOOGLE_LOGIN, handleGoogleLogin),
    takeLatest(USER_EDIT, handleUserEdit)
  ]);
}
