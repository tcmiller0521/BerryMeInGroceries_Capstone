import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const StoresBanner = () => {

    return (
        <>
            <View style={storesBanner.container}>
                    <Text style={storesBanner.headerText}>
                        My Stores
                    </Text>
            </View>
        </>
    )
}

const storesBanner = StyleSheet.create({
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

export default StoresBanner;