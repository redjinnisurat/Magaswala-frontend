// axios.js

import axios from 'axios';

const instance = axios.create({
    baseURL: "https://magaswalaapi.magaswala.com/public/api/", // Replace with your actual base URL
});

export default instance;