import * as api from '../api/index'
import { getCards, addCard, updateCard, deleteCard } from '../state/cardSlice';

export const retrieveCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCards();
        dispatch(getCards(data))
    } catch (error) {
        console.log(error)
    }
};

export const createCard = (card) => async (dispatch) => {
    try {
        const { data } = await api.newCard(card);
        dispatch(addCard(data))     
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const editCard = (id, card) => async (dispatch) => {
    try {
        const { data } = await api.updateCard(id, card);

        dispatch(updateCard(data));
    } catch (error) {
        console.log(error)
    }
}

export const removeCard = (id) => async (dispatch) => {
    try {
        await api.deleteCard(id);

        dispatch(deleteCard(id));
    } catch (error) {
        console.log(error);
    }
};