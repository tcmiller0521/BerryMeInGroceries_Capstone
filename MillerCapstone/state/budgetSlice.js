import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
    name: "budgetList",
    initialState: {
        budgetList: [],
    },
    reducers: {
        getBudget: ( state, action ) => {
            state.budgetList = action.payload;
            console.log(action.payload)
        },

        addBudget: (state, action) => {
            state.budgetList.push(action.payload);
            console.log(action.payload);
        },
        updateBudget: (state, action) => {
            state.budgetList.map((budget) => (budget._id === action.payload._id ? action.payload : budget ));
        },
        deleteBudget: (state, action) => {
            state.budgetList.filter((budget) => budget._id !== action.payload);
        }
    }
})

export const { getBudget, addBudget, updateBudget, deleteBudget } = budgetSlice.actions
export const selectBudgetList = (state) => state.budgetList.budgetList;
export default budgetSlice.reducer;