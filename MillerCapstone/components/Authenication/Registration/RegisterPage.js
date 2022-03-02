import React from "react";
import { View, StyleSheet } from 'react-native'
import RegisterForm from "./RegistrationForm";
import RegisterHeader from "./RegisterHeader";
import ReturnUser from "./ReturnUser";

const RegisterPage = ({navigation}) => {
    return (
        <>
            <View style={register.container}>
                <RegisterHeader />
                <RegisterForm navigation={navigation}/>
                <ReturnUser navigation={navigation}/>
            </View>
        </>
    )
}

const register = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})



export default RegisterPage;