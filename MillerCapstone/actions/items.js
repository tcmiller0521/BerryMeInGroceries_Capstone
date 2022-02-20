import * as api from '../api/index'
import { getItems, addItem, updateItem, deleteItem } from '../state/itemSlice';

export const retrieveItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItems();
        dispatch(getItems(data))
    } catch (error) {
        console.log(error)
    }
};

export const createItemList = (item) => async (dispatch) => {
    try {
        const { data } = await api.newItem(item);
        dispatch(addItem(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const editItem = (id, item) => async (dispatch) => {
    try {
        const { data } = await api.updateItem(id, item);

        dispatch(updateItem(data));
    } catch (error) {
        console.log(error)
    }
}

export const removeItem = (id) => async (dispatch) => {
    try {
        await api.deleteItem(id);

        dispatch(deleteItem(id));
    } catch (error) {
        console.log(error);
    }
};