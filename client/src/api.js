import axios from 'axios';

const server = 'http://localhost:3333/';

const api = {
  get: (path, params = {}) => axios.get(`${server}${path}`, { params }).then(({ data }) => data),
};

export default api;
