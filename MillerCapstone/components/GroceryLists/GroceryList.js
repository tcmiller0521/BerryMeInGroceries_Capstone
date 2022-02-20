import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useParams } from "react-router-native";
import { selectItemList } from "../../state/itemSlice";

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const GroceryList = () => {

    const allItems = useSelector(selectItemList);
  
    const {index} = useParams();
    const items = Object.values(allItems[1]);
    console.log(items);

    // let priceTotal = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     priceTotal += prices.price[i];
    // }
    // console.log(priceTotal);

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

    const renderItem = ({item, index}) => {
        return (
            <>
                <View style={groceryList.itemContainer}>
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