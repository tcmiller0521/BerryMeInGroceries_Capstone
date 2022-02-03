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
                <RegisterForm />
                <ReturnUser navigation={navigation}/>
            </View>
        </>
    )
}

const register = StyleSheet.create({
    container: {
        height: 1020,
        backgroundColor: "#2D3339"
    }

})



export default RegisterPage;