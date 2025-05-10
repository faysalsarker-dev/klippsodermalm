import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', 

});

export default axiosInstance;
