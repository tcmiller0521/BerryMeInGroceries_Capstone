import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const usersSlice = createSlice ({
    name: "users",
    initialState: {
        users: AsyncStorage.getItem('profile')
    },
    reducers: {
        addUsers: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addUsers } = usersSlice.actions;
export const selectUserList = (state) => state.users.users;
export default usersSlice.reducer;