import axios from 'axios';
const API = axios.create({ baseURL: 'http://10.0.2.2:5000' })

export const fetchLists = () => API.get('/list/get');
export const createList = (newList) => API.post('/list/add', newList);

export const fetchItems = () => API.get('/items/get');
export const newItem = (newItem) => API.post('/items/add', newItem);
export const updateItem = (id, updatedItem) => API.patch(`/item/update/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/item/delete/${id}`);

export const fetchBudget = () => API.get('/budget/get');
export const createBudget = (newBudget) => API.post('/budget/add', newBudget);