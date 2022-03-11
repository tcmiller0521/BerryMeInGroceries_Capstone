import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: [],
        token: "",
    },
    reducers: {
        loginUser: (state, action) => {
           state.token = JSON.stringify(action.payload);
           console.log(state.token)
        },
        updateUser: (state, action) => {
            state.auth.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
        },
        updatePassword: (state, action) => {
            state.auth.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
        },
        getUser: (state, action) => {
            state.auth = action.payload
        },
    }
});

export const { loginUser, updateUser, updatePassword, getUser } = authSlice.actions;
export const selectUser = (state) => state.auth.auth;
export const selectToken = ( state ) => state.auth.token;
export default authSlice.reducer;