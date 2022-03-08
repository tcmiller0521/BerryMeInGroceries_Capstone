import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { selectGroceryList } from "../../state/listSlice";
import { useSelector } from "react-redux";
import { selectBudgetList } from "../../state/budgetSlice";

const ItemBudget = ({ index }) => {

    const listInfo = useSelector(selectGroceryList);
    const budgetInfo = useSelector(selectBudgetList)

    // const budget = budgetInfo.map(budget => {
    //     if (listInfo[index].budgetName === budget.budgetName) {
    //         console.log(budget)
    //     } else {
    //         console.log('Nope')
    //     }
    // })





    return (
        <>
            {budgetInfo.map((budget, i) => {
                if (listInfo[index].budgetName === budget.budgetName) {
                    return (
                        <View key={i} style={itemBudget.container}>
                            <View style={itemBudget.budgetContainer}>
                                <View style={[itemBudget.budgetBox, itemBudget.budgetOne]}>
                                    <Text style={itemBudget.budgetText}>
                                        Spent
                                    </Text>
                                    {budget.spent === null ?
                                        <Text style={itemBudget.amountText}>
                                            $0
                                        </Text> :
                                        <Text style={itemBudget.amountText}>
                                            ${budget.spent}
                                        </Text>
                                    }
                                </View>
                                <View style={[itemBudget.budgetBox, itemBudget.budgetTwo]}>
                                    <Text style={itemBudget.budgetText}>
                                        Remaining
                                    </Text>
                                    <Text style={itemBudget.amountText}>
                                        ${budget.remaining - budget.spent}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                } else {
                    <View style={itemBudget.container}>
                        <Text>
                            Hello
                        </Text>
                    </View>
                }
            })}
        </>
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
