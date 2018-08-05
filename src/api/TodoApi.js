export default class TodoApi {
  constructor({ apiClient }) {
    if (!apiClient) {
      throw new Error('[apiClient] required');
    }
    this.apiClient = apiClient;
  }

  chi(params) {
    return this.apiClient.get('todo/chi', {}, params);
  }
}
