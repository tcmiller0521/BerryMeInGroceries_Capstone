import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserInfo = () => {

    return (
        <>
            <View style={userInfo.container}>
                <Image style={userInfo.userPic}
                    source={require('../../Assets/images/Taylor_Avatar.png')}
                />
                <View>
                    <Text style={userInfo.userName}>
                        Taylor Miller
                    </Text>
                </View>
            </View>
        </>
    )
}

const userInfo = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    userPic: {
        height: 175,
        width: 175,
        backgroundColor: "#CCCCCC",
        borderRadius: 100,
    },
    userName: {
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 26,
        marginTop: 20,
        marginBottom: 20,
    }
})

export default UserInfo;