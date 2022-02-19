import * as api from '../api/index'
import { addList, getLists } from '../state/listSlice';

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