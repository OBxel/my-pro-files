import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const apiHandler = axios.create({
    baseURL: `${REACT_APP_SERVER_URL}/api`,
    timeout: 5000,
});

export const fetchProjects = async () => {
    try {
        const response = await apiHandler.get('/projects');
        return response.data;
    } catch (err) {
        console.error('Error fetching projects', err);
        throw err;
    }
};

export default apiHandler;