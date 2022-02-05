import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const DATA = [
    {
        id: 1,
        key: "item1",
        title: "First Budget",
        spent: "$$$",
        remaining: "$$$"
    },
    {
        id: 2,
        key: "item1",
        title: "First Budget",
        spent: "$$$",
        remaining: "$$$"
    },
    {
        id: 3,
        key: "item1",
        title: "First Budget",
        spent: "$$$",
        remaining: "$$$"
    },

]

let colorOne = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]
let colorTwo = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1"]

const Budget = () => {

    const renderItem = ({ item, index }) => (
        <View>
            <View style={budget.headerContainer}>
                <Text style={budget.headerText}>
                    Budget One
                </Text>
            </View>
            <View style={budget.budgetContainer}>
                <View style={[{ backgroundColor: colorOne[index % colorOne.length] }, budget.budgetBox]}>
                    <Text style={budget.budgetText}>
                        Spent
                    </Text>
                    <Text style={budget.amountText}>
                        $$$
                    </Text>
                </View>
                <View style={[{ backgroundColor: colorTwo[index % colorTwo.length] }, budget.budgetBox]}>
                    <Text style={budget.budgetText}>
                        Remaining
                    </Text>
                    <Text style={budget.amountText}>
                        $$$
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <>
            <View style={budget.container}>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={budget.newListContainer}>
                <TouchableOpacity style={budget.newListButton}>
                    <Text style={budget.headerText}>
                        + New Budget
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={budget.newListButton}>
                    <Text style={budget.headerText}>
                        Edit Budget
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const budget = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginStart: 30,
        marginEnd: 30
    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    headerContainer: {
        marginBottom: 0,
    },
    budgetContainer: {
        justifyContent: "space-evenly",
        marginTop: 15,
    },
    budgetBox: {
        width: 150,
        height: 100,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    budgetText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Coolvetica-Regular"
    },
    amountText: {
        color: "#fff",
        fontFamily: "Roboto-Regular"
    },
    newListContainer: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    newListButton: {
        backgroundColor: "#363E44",
        width: 300,
        height: 50,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
})


export default Budget;