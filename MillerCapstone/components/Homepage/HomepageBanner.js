import React, { Profiler, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { selectUserList } from "../../state/usersSlice";
import { selectToken } from "../../state/authSlice";



const HomepageBanner = ({ navigation }) => {

    const user = useSelector(selectUserList)
    console.log(user)
    // const user = useSelector(selectToken)
    // console.log(user)
    // const userInfo = JSON.parse(user)
    // console.log(userInfo)

    return (
        <>
            <View style={homepageBanner.container}>
                <TouchableOpacity style={homepageBanner.userContainer}
                onPress={() => navigation.navigate('Profile')}
                >
                    <Image style={homepageBanner.userPic}
                    source={require('../../Assets/images/download.jpg')}
                    />
                </TouchableOpacity>
                <View style={homepageBanner.textContainer}>
                    <Text style={homepageBanner.headerText}>
                        Welcome Back, Guest
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