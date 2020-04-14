import axios from 'axios';
import foreach from 'lodash/each';
import config from '../config';

export class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);

    this.responseInterceptors = [];
    this.badResponseInterceptors = [];

    this.initializeResponseInterceptors();

    this.attachBadResponseInterceptor(error => {
      this.handleBadResponse({ error });
    });
  }

  handleBadResponse = ({ error }) => {
    try {
      const { status } = error.response;
      switch (status) {
        case 401:
          this.unauthorizedCallback();
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
    }
    return Promise.reject(error);
  };

  setRefreshRetry = callback => {
    this.refreshRetry = callback;
  };

  setUnauthorizedCallback = callback => {
    this.unauthorizedCallback = callback;
  };

  attachHeaders = (headers = {}) => {
    Object.assign(this.client.defaults.headers, headers);
  };

  removeHeaders = (headers = []) => {
    headers.forEach(key => delete this.client.defaults.headers[key]);
  };

  attachResponseInterceptor = callback => {
    this.responseInterceptors.push(callback);
  };

  attachRequestInterceptor(interceptor) {
    this.client.interceptors.request.use(interceptor);
  }

  attachBadResponseInterceptor = callback => {
    this.badResponseInterceptors.push(callback);
  };

  initializeResponseInterceptors = () => {
    this.client.interceptors.response.use(
      response => {
        foreach(this.responseInterceptors, i => {
          i(response);
        });

        return response;
      },
      error => {
        if (error.response && error.response.status) {
          foreach(this.badResponseInterceptors, i => {
            i(error);
          });
        }

        return Promise.reject(error);
      }
    );
  };
}

const clientConfig = {
  baseURL: config.API_BASE_URL || 'http://localhost:8000/api'
};

export default new HttpService(clientConfig);
