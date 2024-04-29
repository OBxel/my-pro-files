import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const apiHandler = axios.create({
    baseURL: REACT_APP_SERVER_URL,
    timeout: 5000,
});

export default apiHandler;