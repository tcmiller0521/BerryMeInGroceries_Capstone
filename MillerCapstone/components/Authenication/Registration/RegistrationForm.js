import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const RegisterForm = () => {
    const [text, onChangeText] = React.useState(null)

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
                        value={text}
                    />
                    <TextInput
                        placeholder="Password"
                        style={registerForm.input}
                        value={text}
                    />
                    <TouchableOpacity
                        onPress={() => Alert.alert('Button was pressed')}
                        style={registerForm.loginButton}
                    >
                        <Text style={registerForm.buttonText}>
                            Login
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