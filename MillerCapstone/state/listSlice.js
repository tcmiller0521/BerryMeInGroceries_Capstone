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
    }
})

export const { addList, getLists } = listSlice.actions
export const selectGroceryList = (state) => state.groceryList.groceryList;
export default listSlice.reducer;