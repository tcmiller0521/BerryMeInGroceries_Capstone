import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cardList",
    initialState: {
        cardList: [],
    },
    reducers: {
        getCards: ( state, action ) => {
            state.cardList = action.payload;
            console.log(action.payload)
        },

        addCard: (state, action) => {
            state.cardList.push(action.payload);
            console.log(action.payload);
        },
        updateCard: (state, action) => {
            state.cardList.map((card) => (card._id === action.payload._id ? action.payload : card ));
        },
        deleteCard: (state, action) => {
            state.cardList.filter((card) => card._id !== action.payload);
        }
    }
})

export const { getCards, addCard, updateCard, deleteCard } = cardSlice.actions
export const selectCardList = (state) => state.cardList.cardList;
export default cardSlice.reducer;