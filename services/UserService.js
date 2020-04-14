import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  ME: '/auth/me',
  USER: '/user'
};

class UserService extends BaseApiService {
  me = () => this.apiClient.get(ENDPOINTS.ME);

  edit = data => {
    let formData = new FormData();
    if (data.avatar) {
      const uri = data.avatar.uri;
      const name = uri.split('/').pop();
      const type = 'image/jpeg';
      formData.append('avatar', { uri, name, type });
    }

    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);

    return this.apiClient.post(ENDPOINTS.USER, formData);
  };
}

export default new UserService();
