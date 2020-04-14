import {
  FACEBOOK_LOGIN,
  GOOGLE_LOGIN
} from '../actionTypes/SocialLoginActionTypes';

export const facebookLogin = payload => ({
  type: FACEBOOK_LOGIN,
  payload
});

export const googleLogin = payload => ({
  type: GOOGLE_LOGIN,
  payload
});
