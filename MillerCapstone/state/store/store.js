import { configureStore } from '@reduxjs/toolkit';
import listSliceReducer from '../listSlice';
import itemSliceReducer from '../itemSlice';
import budgetSliceReducer from '../budgetSlice';
import cardSliceReducer from '../cardSlice';
import storeSliceReducer from '../storeSlice';

export const store = configureStore({
    reducer: {
       groceryList: listSliceReducer ,
       itemList: itemSliceReducer,
       budgetList: budgetSliceReducer,
       cardList: cardSliceReducer,
       storeList: storeSliceReducer
    },
});