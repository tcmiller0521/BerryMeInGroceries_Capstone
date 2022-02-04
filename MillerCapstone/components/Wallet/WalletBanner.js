import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const WalletBanner = () => {

    return (
        <>
            <View style={walletBanner.container}>
                    <Text style={walletBanner.headerText}>
                        My Cards
                    </Text>
            </View>
        </>
    )
}

const walletBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#1B1F22",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
    }

})

export default WalletBanner;