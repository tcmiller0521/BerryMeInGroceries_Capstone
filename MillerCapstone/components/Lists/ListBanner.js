import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const ListBanner = () => {

    return (
        <>
            <View style={listBanner.container}>
                    <Text style={listBanner.headerText}>
                        My Lists
                    </Text>
            </View>
        </>
    )
}

const listBanner = StyleSheet.create({
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

export default ListBanner;