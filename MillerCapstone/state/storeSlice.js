import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name: "storeList",
    initialState: {
        storeList: [],
    },
    reducers: {
        getStores: ( state, action ) => {
            state.storeList = action.payload;
            console.log(action.payload)
        },

        addStore: (state, action) => {
            state.storeList.push(action.payload);
            console.log(action.payload);
        },
        updateStore: (state, action) => {
            state.storeList.map((store) => (store._id === action.payload._id ? action.payload : store ));
        },
        deleteStore: (state, action) => {
            state.storeList.filter((store) => store._id !== action.payload);
        }
    }
})

export const { getStores, addStore, updateStore, deleteStore } = storeSlice.actions
export const selectStoreList = (state) => state.storeList.storeList;
export default storeSlice.reducer;