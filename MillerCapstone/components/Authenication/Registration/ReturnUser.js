import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Link } from "react-router-native";

const ReturnUser = ({ navigation }) => {

    return (
        <>
            <View style={returnUser.container}>
                <Text style={returnUser.text}>
                    Don't have an account?
                </Text>
                    <Text style={returnUser.signUp} onPress={() => navigation.navigate('Login')}>
                        Sign Up
                    </Text>
            </View>
            <View style={returnUser.container}>
                    <Text style={returnUser.guest} onPress={() => navigation.navigate('Homepage')}>
                        Continue as Guest
                    </Text>
            </View>
        </>
    )
}

const returnUser = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "center"
    },
    text: {
        marginTop: 15,
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        color: "#fff",
        textAlign: "center"
    },
    signUp: {
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        color: "#fff",
        textAlign: "center",
        textDecorationLine: "underline",
    },
    guest: {
        marginTop: 30,
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        color: "#4F7CAC",
        textAlign: "center",
        textDecorationLine: "underline",
    }
})

export default ReturnUser;