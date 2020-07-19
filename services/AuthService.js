import jsCookie from 'js-cookie';

import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  ME: '/api/auth/me',
  EDIT_PROFILE: '/api/auth/me',
  LOGIN: '/api/auth/login',
  SIGN_UP: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  CHANGE_PASSWORD: '/api/auth/change-password',
  FACEBOOK: '/auth/social/facebook',
  GOOGLE: '/auth/social/google'
};

class AuthService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token);
      this.http.setUnauthorizedCallback(() => this.destroySession());
    }
  }

  getUser = () => this.apiClient.get(ENDPOINTS.ME);

  updateProfile = (data) => {
    const formData = new FormData();
    if (data.avatar) {
      const { uri } = data.avatar;
      const name = uri.split('/').pop();
      const type = 'image/jpeg';
      formData.append('avatar', { uri, name, type });
    }

    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);

    return this.apiClient.post(ENDPOINTS.EDIT_PROFILE, formData);
  };

  login = async (loginData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  googleLogin = async (googleLoginData) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.GOOGLE,
      googleLoginData
    );

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  facebookLogin = async (facebookLoginData) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.FACEBOOK,
      facebookLoginData
    );

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  register = async (signUpData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGN_UP, signUpData);

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  logout = () => {
    this.apiClient.post(ENDPOINTS.LOGOUT);

    this.destroySession();

    this.http.setUnauthorizedCallback(() => {});
  };

  forgotPassword = (data) =>
    this.apiClient.post(ENDPOINTS.FORGOT_PASSWORD, data);

  resetPassword = (data) => this.apiClient.post(ENDPOINTS.RESET_PASSWORD, data);

  changePassword = (data) =>
    this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);

  createSession = (token) => {
    jsCookie.set('access_token', token.access_token);
    jsCookie.set('refresh_token', token.refresh_token);
  };

  destroySession = () => {
    jsCookie.remove('access_token');
    jsCookie.remove('refresh_token');

    this.removeAuthHeader();
  };

  attachAuthHeader = (token) => {
    this.http.attachHeaders({
      Authorization: `Bearer ${token}`
    });
  };

  getToken = () => {
    const token = jsCookie.get('access_token');

    return token || null;
  };

  getRefreshToken = () => {
    const token = jsCookie.get('refresh_token');

    return token || null;
  };

  removeAuthHeader = () => {
    this.http.removeHeaders(['Authorization']);
  };
}

export const authService = new AuthService();

export default authService;
