import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectBudgetList } from "../../state/budgetSlice";
import BudgetModal from "./BudgetModal";
import Swipeable from 'react-native-gesture-handler/Swipeable';


let colorOne = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]
let colorTwo = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1"]

const Budget = ({ currentBudgetId, setCurrentBudgetId }) => {

    const allBudgets = useSelector(selectBudgetList);
    const dispatch = useDispatch();
    console.log(allBudgets)


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

    const RenderRight = (progress, dragX) => {
        return (
            <>
                <TouchableOpacity onPress={() => dispatch(removeList((allBudgets) => String(allBudgets._id)))}>
                    <View style={budget.deleteContainer}>
                        <Text style={budget.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(removeList((item) => String(item._id)))}>
                    <View style={budget.editContainer}>
                        <Text style={budget.swipeText}>
                            Edit
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const renderItem = ({ item, index }) => (
        <>
            <Swipeable renderRightActions={RenderRight}>
                <View>
                    <View style={budget.headerContainer}>
                        <Text style={budget.headerText}>
                            {item.budgetName}
                        </Text>
                    </View>
                    <View style={budget.listContainer}>
                        <View style={budget.columnOne}>
                            <View style={[{ backgroundColor: colorOne[index % colorOne.length] }, budget.budgetBox]}>
                                <Text style={budget.budgetText}>
                                    {item.remaining}
                                </Text>
                            </View>
                        </View>
                        <View style={budget.columnTwo}>
                            <View style={[{ backgroundColor: colorTwo[index % colorTwo.length] }, budget.budgetBox]}>
                                <Text style={budget.budgetText}>
                                    {item.spent}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </>
    );

    return (
        <>
            <View style={budget.container}>
                <FlatList
                    data={allBudgets}
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
        marginTop: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 445,
        marginBottom: 20
    },
    listContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    // headerContainer: {
    //     marginBottom: 0,
    // },
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
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    amountText: {
        color: "#fff",
        fontFamily: "Roboto-Regular"
    },
    columnTwo: {
        width: "46%",
        alignItems: "center",
        justifyContent: "center",
    },
    columnOne: {
        width: "46%",
        alignItems: "center",
        justifyContent: "center"
    },
    deleteContainer: {
        height: 100,
        width: 100,
        marginTop: 35,
        backgroundColor: '#CE384E',
        borderRadius: 100 / 4,
        alignContent: "center",
        justifyContent: "center",
    },
    editContainer: {
        height: 100,
        width: 100,
        marginTop: 35,
        backgroundColor: '#363E44',
        borderRadius: 100 / 4,
        alignContent: "center",
        justifyContent: "center",
        marginRight: 10
    },
    swipeText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "Coolvetica-Regular"
    }
})


export default Budget;


{/* <View style={budget.listContainer}>
    <View style={budget.budgetContainer}>
        <View style={[{ backgroundColor: colorOne[index % colorOne.length] }, budget.budgetBox, budget.columnOne]}>
            <Text style={budget.budgetText}>
                Spent
            </Text>
            {!item.spent ? <Text style={budget.amountText}>$0</Text> : (
                <Text style={budget.amountText}>{item.spent}</Text>
            )}
        </View>
        <View style={[{ backgroundColor: colorTwo[index % colorTwo.length] }, budget.budgetBox, budget.columnTwo]}>
            <Text style={budget.budgetText}>
                Remaining
            </Text>
            <Text style={budget.amountText}>
                ${item.remaining}
            </Text>
        </View>
    </View> */}