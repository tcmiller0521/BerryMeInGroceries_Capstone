import * as api from '../api/index'
import { getBudget, addBudget, deleteBudget, updateBudget } from '../state/budgetSlice';

export const retrieveBudget = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBudget();
        dispatch(getBudget(data))
    } catch (error) {
        console.log(error)
    }
};

export const createBudget = (list) => async (dispatch) => {
    try {
        const { data } = await api.createBudget(list);
        dispatch(addBudget(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};