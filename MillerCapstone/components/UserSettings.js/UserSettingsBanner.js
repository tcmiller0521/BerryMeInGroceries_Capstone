import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const UserSettingsBanner = ({ navigation }) => {

    return (
        <>
            <View style={userSettingsBanner.container}>
                <TouchableOpacity style={userSettingsBanner.userContainer}
                onPress={() => navigation.navigate('Profile')}
                >
                    <Image style={userSettingsBanner.userPic}
                    source={require('../../Assets/images/Taylor_Avatar.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const userSettingsBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#1B1F22",
        alignItems: "center"
    },
    userContainer: {
        marginLeft: 25,
    },
    userPic: {
        height: 50,
        width: 50,
        backgroundColor: "#CCCCCC",
        borderRadius: 100 / 2,
    },
    textContainer: {
        flexDirection: "row",
        flexGrow: 1,
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
    }

})

export default UserSettingsBanner;