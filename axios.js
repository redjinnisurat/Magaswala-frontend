//  import axios from 'axios';

//  const instance = axios.create({
//      baseURL: 'https://magaswalaapi.magaswala.com/public/api/',
//      timeout: 5000,
//  });


//  instance.interceptors.request.use((config) => {
//      const token = localStorage.getItem('authToken');
//      if (token) {
//          config.headers.Authorization = `Bearer ${token}`;
//      }
//      return config;
//  }, (error) => {
//      return Promise.reject(error);
//  });


//  export default instance;

// axios.js
// import axios from 'axios';

// // Set the base URL for your API
// axios.defaults.baseURL = 'https://magaswalaapi.magaswala.com/public/api/'; // Replace with your API base URL

// // Set the authorization token for all requests
// axios.interceptors.request.use((config) => {
//     const authToken = localStorage.getItem('authToken'); // Replace with your token retrieval logic
//     if (authToken) {
//         config.headers.Authorization = `Bearer ${authToken}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://magaswalaapi.magaswala.com/public/api/' // Replace with your base URL
// });

// export default instance;


import axios from "axios";

axios.defaults.baseURL = "https://magaswalaapi.magaswala.com/public/api/";