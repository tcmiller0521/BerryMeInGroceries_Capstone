import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ListForm = ({ modalVisible, setModalVisible }) => {
    const [text, onChangeText] = React.useState(null)

    return (
        <>
            <View>
                <View style={listForm.inputView}>
                    <TextInput
                        placeholder="Email"
                        style={listForm.input}
                        value={text}
                    />
                    <TextInput
                        placeholder="Password"
                        style={listForm.input}
                        value={text}
                    />
                    <TouchableOpacity
                        onPress={() => Alert.alert('Button was pressed')}
                        style={listForm.loginButton}
                    >
                        <Text style={listForm.buttonText}
                        style={[listForm.button, listForm.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            Create List
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const listForm = StyleSheet.create({
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
        backgroundColor: "#4F7CAC",
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

export default ListForm;