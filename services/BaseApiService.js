import httpService from './HttpService';

class BaseApiService {
  constructor() {
    this.http = httpService;
    this.apiClient = httpService.client;
  }
}

export default BaseApiService;
