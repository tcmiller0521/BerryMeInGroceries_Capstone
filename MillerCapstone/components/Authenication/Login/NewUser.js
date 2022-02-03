import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Link } from "react-router-native";

const NewUser = ({ navigation }) => {

    return (
        <>
            <View style={newUser.container}>
                <Text style={newUser.text}>
                    Don't have an account?
                </Text>
            
                    <Text style={newUser.signUp} onPress={() => navigation.navigate('Register')}>
                        Sign Up
                    </Text>
              
            </View>
            <View style={newUser.container}>
                
                    <Text style={newUser.guest} onPress={() => navigation.navigate('Homepage')}>
                        Continue as Guest
                    </Text>
              
            </View>
        </>
    )
}

const newUser = StyleSheet.create({
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
        color: "#A75889",
        textAlign: "center",
        textDecorationLine: "underline",
    }
})

export default NewUser;