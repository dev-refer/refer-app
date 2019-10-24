import axios from 'axios';
axios.defaults.baseURL = 'https://refer-dev-dot-refer-app-247808.appspot.com';

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    throw error
  }
);

export default axios;