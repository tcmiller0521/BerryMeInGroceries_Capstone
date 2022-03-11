import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../../actions/user";


const initialState = { email: '', password: ''};

const RegisterForm = ({navigation}) => {
    const [userData, setUserData] = useState(initialState)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(userSignUp(userData, navigation))
    }

    return (
        <>
            <View>
                <Text style={registerForm.text}>
                    Register
                </Text>
                <View style={registerForm.inputView}>
                    <TextInput
                        placeholder="Email"
                        style={registerForm.input}
                        value={userData.email}
                        onChangeText={(text) => setUserData({...userData, email: text})}
                    />
                    <TextInput
                        placeholder="Password"
                        style={registerForm.input}
                        value={userData.password}
                        onChangeText={(text) => setUserData({...userData, password: text})}
                    />
                    <TextInput
                        placeholder="Password"
                        style={registerForm.input}
                        value={userData.confirmPassword}
                        onChangeText={(text) => setUserData({...userData, confirmPassword: text})}
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={registerForm.loginButton}
                    >
                        <Text style={registerForm.buttonText}>
                           Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const registerForm = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 40,
        color: "#fff",
        fontFamily: "Coolvetica-Regular"
    },
    inputView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        marginTop: 15,
        textAlign: "center",
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 100/5,
    },
    loginButton: {
        backgroundColor: "#A75889",
        height: 45,
        width: 300,
        borderRadius: 100/4,
        marginTop: 20,
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Coolvetica-Regular"
    }


})

export default RegisterForm;