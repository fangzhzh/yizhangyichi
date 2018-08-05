const URL = '';
export default {
  async getTodo() {
    return fetch(URL, 'header')
      .then(data => data.json())
      .catch(err => console.error(err));
  },
};
