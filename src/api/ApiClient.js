import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

export default class ApiClient {
  constructor(apiPrefix) {
    this.apiPrefix = apiPrefix || '';
  }

  get(requestUrl, payload = {}, params = {}) {
    return this.request({
      url: this.apiPrefix + requestUrl,
      method: 'get',
      body: payload,
      params,
    });
  }

  request({
    url, method, params = {}, body,
  }) {
    if (this.authToken) {
      /* eslint-disable */
      params.token = this.authToken;
      /* eslint-enaable */
    }

    const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    const init = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    if (method != 'get' && method != 'head') {
      init.body = JSON.stringify(body);
    }

    return fetch(`${this.prefix}/${urlWithQuery}`, init)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(url, 'Bad response from server');
        }
        return res.json();
      })
      .then(data => {
        if (data && data.status == 1) {
          return data;
        }
        return Promise.reject(data.error);
      });
  }
}
