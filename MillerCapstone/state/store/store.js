import { configureStore } from '@reduxjs/toolkit';
import listSliceReducer from '../listSlice';
import itemSliceReducer from '../itemSlice';

export const store = configureStore({
    reducer: {
       groceryList: listSliceReducer ,
       itemList: itemSliceReducer
    },
});