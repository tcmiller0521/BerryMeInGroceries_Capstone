import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const DATA = [
    {
        id: 1,
        key: "item1",
        store: "First Store",
        items: ["Item One ", "Item Two ", "Item Three ", "Item Four ", "Item Five ", "Item Six ", "Item Seven "],
        prices: ["$$$ ", " ", "$$$ ", "$$$ ", "$$$ ", "$$$ ", "$$$ ",]
    },
    {
        id: 2,
        key: "item2",
        store: "Second Store ",
        item1: "Item One",
        item2: "Item Two",
        item3: "Item Three",
        item4: "Item Four",
        item5: "Item Five",
        item6: "Item Six",
    },
]

const GroceryList = () => {

    let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

    return (
        <>
            <View style={groceryList.listContainer}>
                <View style={groceryList.container}>
                    <View style={groceryList.storeContainer}>
                        <Text style={groceryList.storeText}>
                            Store One
                        </Text>
                    </View>
                </View>
                <View style={groceryList.itemContainer}>
                    <View style={groceryList.columnOne}>
                        <Text style={groceryList.itemText}>
                            Shopping Item One
                        </Text>
                    </View>
                    <View style={groceryList.columnTwo}>
                        <Text style={groceryList.itemText}>
                            $1000.34
                        </Text>
                    </View>
                </View>
                <View style={groceryList.itemContainer}>
                    <View style={groceryList.columnOne}>
                        <Text style={groceryList.itemText}>
                            Shopping Item One
                        </Text>
                    </View>
                    <View style={groceryList.columnTwo}>
                        <Text style={groceryList.itemText}>
                            $1000.34
                        </Text>
                    </View>
                </View>
                <View style={groceryList.container}>
                    <View style={groceryList.storeContainer}>
                        <Text style={groceryList.storeText}>
                            Store Total
                        </Text>
                    </View>
                </View>
            </View>
            <View style={groceryList.newItemContainer}>
            <TouchableOpacity style={groceryList.newItemButton}>
                    <Text style={groceryList.itemButton}>
                        + New List
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const groceryList = StyleSheet.create({
    listContainer: {
        height: 425,
    },
    container: {
        alignItems: "center",
        marginTop: 25,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
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
    }
})

export default GroceryList;