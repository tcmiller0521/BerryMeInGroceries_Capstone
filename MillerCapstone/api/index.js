import axios from 'axios';
const API = axios.create({ baseURL: 'http://10.0.2.2:5000' })


export const fetchLists = () => API.get('/list/get');
export const createList = (newList) => API.post('/list/add', newList);
export const updateList = (id, updatedList) => API.patch(`/list/update/${id}`, updatedList);
export const deleteList = (id) => API.delete(`/list/delete/${id}`);

export const fetchItems = () => API.get('/items/get');
export const newItem = (newItem) => API.post('/items/add', newItem);
export const updateItem = (id, updatedItem) => API.patch(`/items/update/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/items/delete/${id}`);

export const fetchBudget = () => API.get('/budget/get');
export const createBudget = (newBudget) => API.post('/budget/add', newBudget);
export const updateBudget = (id, updatedBudget) => API.patch(`/budget/update/${id}`, updatedBudget);
export const deleteBudget = (id) => API.delete(`/budget/delete/${id}`);

export const fetchCards = () => API.get('/card/get');
export const newCard = (newCard) => API.post('/card/add', newCard);
export const updateCard = (id, updatedCard) => API.patch(`/card/update/${id}`, updatedCard);
export const deleteCard = (id) => API.delete(`/card/delete/${id}`);

export const fetchStores = () => API.get('/store/get');
export const newStore = (newStore) => API.post('/store/add', newStore);
export const updateStore = (id, updatedStore) => API.patch(`/store/update/${id}`, updatedStore);
export const deleteStore = (id) => API.delete(`/store/delete/${id}`);

export const getUser = () => API.get('/user/get');
export const userLogin = (userInfo) => API.post('/user/signin', userInfo);
export const userRegister = (userInfo) => API.post('user/signup', userInfo);
export const updateUser = (id, updatedUser) => API.patch(`/user/update/${id}`, updatedUser);
export const updatePassword = (id, updatedPassword) => API.patch(`/user/update/password/${id}`, updatedPassword);