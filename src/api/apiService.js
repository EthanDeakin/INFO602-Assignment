import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  // Login user
  login(username, password) {
    console.log('API Request URL:', `${API_URL}/api/login`);
    console.log('API Request Data:', { username, password });
    return axios.post(`${API_URL}/api/login`, { username, password });
  },
};
