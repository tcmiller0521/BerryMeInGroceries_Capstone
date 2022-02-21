import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemBudget = () => {

    

    return (
        <View style={itemBudget.container}>
            <View style={itemBudget.budgetContainer}>
                <View style={[itemBudget.budgetBox, itemBudget.budgetOne]}>
                    <Text style={itemBudget.budgetText}>
                        Spent
                    </Text>
                    <Text style={itemBudget.amountText}>
                        $$$
                    </Text>
                </View>
                <View style={[itemBudget.budgetBox, itemBudget.budgetTwo]}>
                    <Text style={itemBudget.budgetText}>
                        Remaining
                    </Text>
                    <Text style={itemBudget.amountText}>
                        $$$
                    </Text>
                </View>
            </View>
        </View>
    )
}

const itemBudget = StyleSheet.create({
    container: {
        backgroundColor: "#1B1F22",
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
        justifyContent: "space-evenly"
    },
    budgetBox: {
        width: 150,
        height: 100,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25
    },
    budgetOne: {
        backgroundColor: "#A75889",
    },
    budgetTwo: {
        backgroundColor: "#7B6A9B",
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


export default ItemBudget;