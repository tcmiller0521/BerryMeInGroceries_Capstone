import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectBudgetList } from "../../state/budgetSlice";
import BudgetModal from "./BudgetModal";


let colorOne = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]
let colorTwo = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1"]

const Budget = ({ currentBudgetId, setCurrentBudgetId }) => {

    const allBudgets = useSelector(selectBudgetList);

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={budget.noItem}>
                    <Text style={budget.noItemText}>
                        No Budgets here
                    </Text>
                </View>
            </>
        )
    }

    const renderItem = ({ item, index }) => (
        <View>
            <View style={budget.headerContainer}>
                <Text style={budget.headerText}>
                    {item.budgetName}
                </Text>
            </View>
            <View style={budget.budgetContainer}>
                <View style={[{ backgroundColor: colorOne[index % colorOne.length] }, budget.budgetBox]}>
                    <Text style={budget.budgetText}>
                        Spent
                    </Text>
                    {!item.spent ? <Text style={budget.amountText}>$0</Text> : (
                        <Text style={budget.amountText}>{item.spent}</Text>
                    )}
                </View>
                <View style={[{ backgroundColor: colorTwo[index % colorTwo.length] }, budget.budgetBox]}>
                    <Text style={budget.budgetText}>
                        Remaining
                    </Text>
                    <Text style={budget.amountText}>
                        ${item.remaining}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <>
            <View style={budget.container}>
                <FlatList
                    data={allBudgets}
                    horizontal={true}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item._id)}
                />
            </View>
            <View style={budget.newListContainer}>
                <BudgetModal setCurrentBudgetId={setCurrentBudgetId} currentBudgetId={currentBudgetId} />
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