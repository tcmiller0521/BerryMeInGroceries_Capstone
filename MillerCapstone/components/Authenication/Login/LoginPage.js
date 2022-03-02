import React from "react";
import LoginForm from "./LoginForm";
import { View, Text, StyleSheet } from 'react-native'
import LoginHeader from "./LoginHeader";
import NewUser from "./NewUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = ({ navigation }) => {

    
    return (
        <>
            <View style={login.container}>
                <LoginHeader />
                <LoginForm navigation={navigation} />
                <NewUser navigation={navigation} />
            </View>
        </>
    )
}

const login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})



export default LoginPage;