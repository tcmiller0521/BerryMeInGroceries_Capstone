import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-native";
import { selectItemList } from "../../state/itemSlice";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { selectGroceryList } from "../../state/listSlice";
import { removeItem } from '../../actions/items'
import UpdateItemModal from "./UpdateItemModal";
import { retrieveItems } from '../../actions/items'

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const GroceryList = ({ index, allStores }) => {

    const listInfo = useSelector(selectGroceryList);
    const allItems = useSelector(selectItemList);
    const dispatch = useDispatch();

    console.log("stores", allStores)

    let sums = 0

    allItems.forEach(function (i) {
        if (i.listName === listInfo[index].listName) {
            sums += i.price;
        }
    })

    let sum = sums.toFixed(2)

    useEffect(() => {
        dispatch(retrieveItems())
    }, [dispatch])

    const RenderRight = ({ item }) => {

        const handleDelete = () => {
            dispatch(removeItem(item._id))
        }

        return (
            <>
                <TouchableOpacity onPress={handleDelete}>
                    <View style={groceryList.deleteContainer}>
                        <Text style={groceryList.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(removeItem((item) => String(item._id)))}>
                    <UpdateItemModal currentItemId={item._id} index={index} allStores={allStores} />
                </TouchableOpacity>
            </>
        )
    }

    return (
        <>
            <View style={groceryList.listContainer}>
                <ScrollView>
                    {allStores.map((store, i) => (
                        <>
                            <View key={i} style={groceryList.container}>
                                <View style={[{ backgroundColor: colors[i % colors.length] }, groceryList.storeContainer]}>
                                    <Text style={groceryList.storeText}>
                                        {store.storeName}
                                    </Text>
                                </View>
                            </View>
                            {allItems.map((item, l) => (
                                store.storeName === item.storeName ?
                                    <>
                                        {listInfo[index].listName === item.listName ?
                                            <Swipeable key={l} renderRightActions={() => <RenderRight item={item} />}>
                                                <View style={[groceryList.itemContainer, groceryList.shadowProp]}>
                                                    <View style={[groceryList.columnOne, groceryList.itemColumnOne]}>
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
                                    </> : null
                            ))}
                        </>
                    ))}
                    <View style={groceryList.container}>
                        <View style={[{ backgroundColor: "#363E44" }, groceryList.storeContainer]}>
                            <Text style={groceryList.storeText}>
                                Misc
                            </Text>
                        </View>
                    </View>
                    {allItems.map((item, k) => (
                        !item.storeName ?
                            <View key={k}>
                                {listInfo[index].listName === item.listName ?
                                    <Swipeable renderRightActions={() => <RenderRight item={item} />}>
                                    <View style={[groceryList.itemContainer, groceryList.shadowProp]}>
                                        <View style={[groceryList.columnOne, groceryList.itemColumnOne]}>
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
                            </View> : null
                    ))}
                </ScrollView>

                <View style={groceryList.container}>
                    <View style={[{ backgroundColor: "#363E44" }, groceryList.storeContainer]}>
                        <View style={[groceryList.columnOne, groceryList.totalColumnOne]}>
                            <Text style={groceryList.itemText}>
                                Total
                            </Text>
                        </View>
                        <View style={groceryList.columnTwo}>
                            <Text style={groceryList.itemText}>
                                ${sum}
                            </Text>
                        </View>
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
    flatListContainer: {
        height: 350
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
    },
    itemColumnOne: {
        marginLeft: 62,
        marginRight: 10,
    },
    totalColumnOne: {
        marginLeft: 20,
        marginRight: 40,
    },
    itemText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        marginTop: 5,
        marginBottom: 5,
    },
    storeContainer: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: 330,
        height: 35,
        borderRadius: 100 / 2,
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

{/* <FlatList
                            data={allItems}
                            // ListEmptyComponent={ListEmptyComponent}
                            renderItem={StoreRenderItem}
                            // keyExtractor={(item) => String(item._id)}
                        /> */}