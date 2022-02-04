import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const HomepageBanner = ({ navigation }) => {

    return (
        <>
            <View style={homepageBanner.container}>
                <TouchableOpacity style={homepageBanner.userContainer}
                onPress={() => navigation.navigate('User')}
                >
                    <Image style={homepageBanner.userPic}
                    source={require('../../Assets/images/Taylor_Avatar.png')}
                    />
                </TouchableOpacity>
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
        height: 70,
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