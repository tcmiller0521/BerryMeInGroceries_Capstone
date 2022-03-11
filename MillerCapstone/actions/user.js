import * as api from '../api/index.js';
import { loginUser, updateUser, updatePassword, getUser } from '../state/authSlice';

export const retrieveUser = () => async (dispatch) => {
    try {
        const { data } = await api.getUser();
        dispatch(getUser(data))
    } catch (error) {
        console.log(error)
    }
}

export const userSignIn = ( userInfo, navigation ) => async (dispatch) => {
    try {
        const { data } = await api.userLogin(userInfo);

        dispatch(loginUser(data));

        navigation.navigate('Homepage');
    } catch (error) {
        console.log(error);
    }
};

export const userSignUp = ( userInfo, navigation ) => async (dispatch) => {
    try{
        const { data } = await api.userRegister(userInfo);

        dispatch(loginUser(data));

        navigation.navigate('Homepage');
    } catch (error) {
        console.log(error)
    }
};

export const editUser = (id, userInfo) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, userInfo);

        dispatch(updateUser(data));
    } catch (error) {
        console.log(error)
    }
};

export const editPassword = ( id, userInfo ) => async (dispatch) => {
    try{
        const { data } = await api.updatePassword(id, userInfo);

        dispatch(updatePassword(data));
    } catch (error) {
        console.log(error)
    }
};