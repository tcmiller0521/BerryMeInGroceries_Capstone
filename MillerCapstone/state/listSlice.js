import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "groceryList",
    initialState: {
        groceryList: [],
    },
    reducers: {
        getLists: ( state, action ) => {
            state.groceryList = action.payload;
            console.log(action.payload)
        },

        addList: (state, action) => {
            state.groceryList.push(action.payload);
            console.log(action.payload);
        },
        updateList: (state, action) => {
            state.groceryList.map((list) => (list._id === action.payload._id ? action.payload : list ));
        },
        deleteList: (state, action) => {
            state.groceryList.filter((list) => list._id !== action.payload);
        }
    }
})

export const { addList, getLists, deleteList, updateList } = listSlice.actions
export const selectGroceryList = (state) => state.groceryList.groceryList;
export default listSlice.reducer;