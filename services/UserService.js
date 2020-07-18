import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  ME: '/api/auth/me', // replace Next API endpoint
  CHANGE_PASSWORD: '/user/change-password',
  USER: '/user'
};

class UserService extends BaseApiService {
  me = () => this.apiClient.get(ENDPOINTS.ME);

  edit = (data) => {
    const formData = new FormData();
    if (data.avatar) {
      const { uri } = data.avatar;
      const name = uri.split('/').pop();
      const type = 'image/jpeg';
      formData.append('avatar', { uri, name, type });
    }

    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);

    return this.apiClient.post(ENDPOINTS.USER, formData);
  };

  changePassword = (data) =>
    this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);
}

export default new UserService();
