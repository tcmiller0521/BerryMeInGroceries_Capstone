import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const BudgetBanner = () => {

    return (
        <>
            <View style={budgetBanner.container}>
                    <Text style={budgetBanner.headerText}>
                        My Budget
                    </Text>
            </View>
        </>
    )
}

const budgetBanner = StyleSheet.create({
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

export default BudgetBanner;