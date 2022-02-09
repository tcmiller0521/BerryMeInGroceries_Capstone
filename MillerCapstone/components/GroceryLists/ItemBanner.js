import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const ItemBanner = ({ navigation }) => {

    return (
        <>
            <View style={itemBanner.container}>
                    <Text style={itemBanner.headerText}>
                        List Name
                    </Text>
            </View>
        </>
    )
}

const itemBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#1B1F22",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
    }

})

export default ItemBanner;