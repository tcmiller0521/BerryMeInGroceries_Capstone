import React from "react";
import LoginForm from "./LoginForm";
import { View, Text, StyleSheet } from 'react-native'
import LoginHeader from "./LoginHeader";
import NewUser from "./NewUser";

const LoginPage = ({ navigation }) => {
    return (
        <>
            <View style={login.container}>
                <LoginHeader />
                <LoginForm />
                <NewUser navigation={navigation} />
            </View>
        </>
    )
}

const login = StyleSheet.create({
    container: {
        height: 1020,
        backgroundColor: "#2D3339"
    }

})



export default LoginPage;