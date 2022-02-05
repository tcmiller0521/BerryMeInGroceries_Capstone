import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UserOptions = ({ navigation }) => {

    return (
        <>
            <View style={userOptions.container}>
                <TouchableOpacity style={[{backgroundColor: "#FFC4D1"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Lists')}
                >
                    <Text style={userOptions.listText}>
                        My Lists
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: "#F185B3"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Budget')}
                >
                    <Text style={userOptions.listText}>
                        My Budget
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: "#A75889"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Wallet')}
                >
                    <Text style={userOptions.listText}>
                        My Cards
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: "#7B6A9B"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Stores')}
                >
                    <Text style={userOptions.listText}>
                        My Stores
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: "#4F7CAC"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Wallet')}
                >
                    <Text style={userOptions.listText}>
                        Friends
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: "#5DD39E"}, userOptions.listItem]}
                onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={userOptions.listText}>
                        Account Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const userOptions = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1F22",
        alignItems: "center",
        justifyContent: "center"
    },
    listItem: {
        margin: 5,
        marginLeft: 0,
        height: 60,
        width: 300,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignItems: "center"
    },
    listText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center",
    }
})

export default UserOptions;