import * as api from '../api/index'
import { addList, deleteList, getLists } from '../state/listSlice';

export const retrieveLists = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLists();
        dispatch(getLists(data))
    } catch (error) {
        console.log(error)
    }
};

export const createGroceryList = (list) => async (dispatch) => {
    try {
        const { data } = await api.createList(list);
        dispatch(addList(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const removeList = (id) => async (dispatch) => {
    try {
        await api.deleteList(id);

        dispatch(deleteList(id));
    } catch (error) {
        console.log(error);
    }
};