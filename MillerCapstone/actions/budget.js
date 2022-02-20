import * as api from '../api/index'
import { getItems, addItem } from '../state/itemSlice';

export const retrieveItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItems();
        dispatch(getItems(data))
    } catch (error) {
        console.log(error)
    }
};

export const createItemList = (list) => async (dispatch) => {
    try {
        const { data } = await api.newItem(list);
        dispatch(addItem(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}