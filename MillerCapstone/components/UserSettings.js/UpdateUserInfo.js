import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const UpdateUserInfo = () => {
    const [text, onChangeText] = React.useState(null)

    return (
        <>
            <View style={updateUserInfo.container}>
                <Text style={updateUserInfo.text}>
                    Update Information
                </Text>
                <TextInput
                    placeholder="First Name"
                    style={updateUserInfo.input}
                    value={text}
                />
                <TextInput
                    placeholder="Last Name"
                    style={updateUserInfo.input}
                    value={text}
                />
                <TextInput
                    placeholder="Email"
                    style={updateUserInfo.input}
                    value={text}
                />
                <TextInput
                    placeholder="Password"
                    style={updateUserInfo.input}
                    value={text}
                />
                <TouchableOpacity
                    onPress={() => Alert.alert('Button was pressed')}
                    style={updateUserInfo.updateButton}
                >
                    <Text style={updateUserInfo.buttonText}>
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const updateUserInfo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1F22",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 22,
        color: "#fff",
        marginTop: 15,
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
        borderRadius: 100 / 5,
    },
    updateButton: {
        backgroundColor: "#5DD39E",
        height: 45,
        width: 300,
        borderRadius: 100 / 4,
        marginTop: 20,
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 22,
        textAlign: "center",
        fontFamily: "Coolvetica-Regular"
    }

})

export default UpdateUserInfo;