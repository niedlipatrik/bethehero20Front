import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero20.herokuapp.com/',
})

export default api;