import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "itemList",
    initialState: {
        itemList: [],
    },
    reducers: {
        getItems: ( state, action ) => {
            state.itemList = action.payload;
            console.log(action.payload)
        },

        addItem: (state, action) => {
            state.itemList.push(action.payload);
            console.log(action.payload);
        },
        updateItem: (state, action) => {
            state.itemList.map((item) => (item._id === action.payload._id ? action.payload : item ));
        },
        deleteItem: (state, action) => {
            state.itemList.filter((item) => item._id !== action.payload);
        }
    }
})

export const { addItem, getItems, updateItem, deleteItem } = itemSlice.actions
export const selectItemList = (state) => state.itemList.itemList;
export default itemSlice.reducer;