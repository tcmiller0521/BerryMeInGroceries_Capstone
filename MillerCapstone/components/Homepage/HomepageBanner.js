import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const HomepageBanner = () => {

    return (
        <>
            <View style={homepageBanner.container}>
                <View style={homepageBanner.userContainer}>
                    <Text style={homepageBanner.userPic}>
                        Pic
                    </Text>
                </View>
                <View style={homepageBanner.textContainer}>
                    <Text style={homepageBanner.headerText}>
                        Welcome Back, Taylor
                    </Text>
                </View>
            </View>
        </>
    )
}

const homepageBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 75,
        backgroundColor: "#1B1F22",
        justifyContent: "center",
        alignItems: "center"
    },
    userContainer: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
    },
    userPic: {
        height: 50,
        width: 50,
        backgroundColor: "#CCCCCC",
        borderRadius: 100 / 2,
        marginEnd: 10,
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

export default HomepageBanner;