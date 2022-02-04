import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Budget = () => {

    return (
        <View style={budget.container}>
            <View style={budget.budgetContainer}>
                <View style={[budget.budgetBox, budget.budgetOne]}>
                    <Text style={budget.budgetText}>
                        Spent
                    </Text>
                    <Text style={budget.amountText}>
                        $$$
                    </Text>
                </View>
                <View style={[budget.budgetBox, budget.budgetTwo]}>
                    <Text style={budget.budgetText}>
                        Remaining
                    </Text>
                    <Text style={budget.amountText}>
                        $$$
                    </Text>
                </View>
            </View>
        </View>
    )
}

const budget = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 10,
    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    headerContainer: {
        marginBottom: 8,
    },
    budgetContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 15,
    },
    budgetBox: {
        width: 150,
        height: 100,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
    },
    budgetOne: {
        backgroundColor: "#4F7CAC",
    },
    budgetTwo: {
        backgroundColor: "#F185B3",
    },
    budgetText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Coolvetica-Regular"
    },
    amountText: {
        color: "#fff",
        fontFamily: "Roboto-Regular"
    }
})


export default Budget;