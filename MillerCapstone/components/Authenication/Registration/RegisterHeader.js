import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

const logo = { URL: "../../../Assets/images/BerryMeInGroceries.png"};

const RegisterHeader = () => {

    return (
        <>
            <View style={registerHeader.container}>
                <View style={registerHeader.logoContainer}>
                    <Image
                        style={registerHeader.logoContainer}
                        source={require("../../../Assets/images/BerryMeInGroceries.png")}
                    />
                </View>
            </View>
        </>
    )
}

const registerHeader = StyleSheet.create({
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

export default RegisterHeader;