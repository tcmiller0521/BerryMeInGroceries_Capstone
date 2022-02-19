import axios from 'axios';
const API = axios.create({ baseURL: 'http://10.0.2.2:5000' })

export const fetchLists = () => API.get('/list/get');
export const createList = (newList) => API.post('/list/add', newList);