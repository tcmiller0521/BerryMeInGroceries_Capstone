import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: [],
    },
    reducers: {
        loginUser: (state, action) => {
           AsyncStorage.setItem('profile', JSON.stringify({...action.payload}));
        },
        updateUser: (state, action) => {
            state.user.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
        },
        updatePassword: (state, action) => {
            state.user.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
        },
        getUser: (state, action) => {
            state.user = action.payload
        },
    }
});

export const { loginUser, updateUser, updatePassword, getUser } = authSlice.actions;
export const selectUser = (state) => state.auth.auth;
export default authSlice.reducer;