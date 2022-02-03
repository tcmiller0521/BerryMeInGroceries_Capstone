import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

const logo = { URL: "../../../Assets/images/BerryMeInGroceries.png"};

const LoginHeader = () => {

    return (
        <>
            <View style={loginHeader.container}>
                <View style={loginHeader.logoContainer}>
                    <Image
                        style={loginHeader.logoContainer}
                        source={require("../../../Assets/images/BerryMeInGroceries.png")}
                    />
                </View>
            </View>
        </>
    )
}

const loginHeader = StyleSheet.create({
    container: {
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        marginTop: 10,
        height: 250,
        width: 250,
    }

})

export default LoginHeader;