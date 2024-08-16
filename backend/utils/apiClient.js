const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 1000,
});

module.exports = apiClient;
