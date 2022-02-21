import * as api from '../api/index'
import { getStores, addStore, updateStore, deleteStore } from '../state/storeSlice';

export const retrieveStores = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStores();
        dispatch(getStores(data))
    } catch (error) {
        console.log(error)
    }
};

export const createStore = (store) => async (dispatch) => {
    try {
        const { data } = await api.newStore(store);
        dispatch(addStore(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const editStore = (id, store) => async (dispatch) => {
    try {
        const { data } = await api.updateStore(id, store);

        dispatch(updateStore(data));
    } catch (error) {
        console.log(error)
    }
}

export const removeStore = (id) => async (dispatch) => {
    try {
        await api.deleteStore(id);

        dispatch(deleteStore(id));
    } catch (error) {
        console.log(error);
    }
};