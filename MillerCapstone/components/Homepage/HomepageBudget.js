import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomepageBudget = () => {

    return (
        <View style={homepageBudget.container}>
            <View style={homepageBudget.headerContainer}>
                <Text style={homepageBudget.headerText}>
                    Budget
                </Text>
            </View>
            <View style={homepageBudget.budgetContainer}>
                <View style={[homepageBudget.budgetBox, homepageBudget.budgetOne]}>
                    <Text style={homepageBudget.budgetText}>
                        Spent
                    </Text>
                    <Text style={homepageBudget.amountText}>
                        $$$
                    </Text>
                </View>
                <View style={[homepageBudget.budgetBox, homepageBudget.budgetTwo]}>
                    <Text style={homepageBudget.budgetText}>
                        Remaining
                    </Text>
                    <Text style={homepageBudget.amountText}>
                        $$$
                    </Text>
                </View>
            </View>
        </View>
    )
}

const homepageBudget = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
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


export default HomepageBudget;