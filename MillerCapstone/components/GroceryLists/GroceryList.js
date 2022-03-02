import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-native";
import { selectItemList } from "../../state/itemSlice";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { selectGroceryList } from "../../state/listSlice";

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const GroceryList = ({ index }) => {

    const listInfo = useSelector(selectGroceryList);
    const allItems = useSelector(selectItemList);
    const dispatch = useDispatch();
   

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={groceryList.noItem}>
                    <Text style={groceryList.noItemText}>
                        No Items Yet
                    </Text>
                </View>
            </>
        )
    }

    const RenderRight = (progress, dragX) => {
        return (
            <>
                <TouchableOpacity onPress={() => dispatch(removeList((allItems) => String(allItems._id)))}>
                    <View style={groceryList.deleteContainer}>
                        <Text style={groceryList.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(removeList((item) => String(item._id)))}>
                    <View style={groceryList.editContainer}>
                        <Text style={groceryList.swipeText}>
                            Edit
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <>
            {listInfo[index].listName === item.listName ?
                <Swipeable renderRightActions={RenderRight}>
                    <View style={[groceryList.itemContainer, groceryList.shadowProp]}>
                        <View style={groceryList.columnOne}>
                            <Text style={groceryList.itemText}>
                                {item.item}
                            </Text> 
                        </View>
                        <View style={groceryList.columnTwo}>
                            <Text style={groceryList.itemText}>
                                ${item.price}
                            </Text>
                        </View>
                    </View>
                </Swipeable> : null
            }
            </>
        )
    }

    return (
        <>
            <View style={groceryList.listContainer}>
                {/* <View style={groceryList.container}>
                    <View style={groceryList.storeContainer}>
                        <Text style={groceryList.storeText}>
                            Store One
                        </Text>
                    </View>
                </View> */}
                <View>
                    <FlatList
                        data={allItems}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item._id)}
                    />
                </View>
                <View style={groceryList.container}>
                    <View style={groceryList.storeContainer}>
                        <Text style={groceryList.storeText}>

                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const groceryList = StyleSheet.create({
    listContainer: {
        height: 425,
    },
    noItem: {
        marginTop: 25,
        justifyContent: "center",
        alignContent: "center"
    },
    noItemText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    container: {
        alignItems: "center",
        marginTop: 200,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: 5,
        backgroundColor: "#2D3339"
    },
    shadowProp: {
        shadowColor: "#0E0F0F",
        elevation: 10,
    },
    columnTwo: {
        width: "30%",
    },
    columnOne: {
        width: "48%",
        marginLeft: 62,
        marginRight: 10,
    },
    itemText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        marginTop: 5,
        marginBottom: 5,
    },
    storeContainer: {
        width: 300,
        height: 30,
        borderRadius: 100 / 2,
        backgroundColor: "#F4A261",
        justifyContent: "center",
    },
    storeText: {
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
        marginLeft: 20
    },
    itemButton: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Coolvetica-Regular"
    },
    newItemContainer: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    newItemButton: {
        backgroundColor: "#363E44",
        width: 300,
        height: 30,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
    },
    deleteContainer: {
        height: 30,
        width: 75,
        backgroundColor: '#CE384E',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
    },
    editContainer: {
        height: 30,
        width: 75,
        backgroundColor: '#363E44',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
    },
    swipeText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "Coolvetica-Regular"
    }
})

export default GroceryList;