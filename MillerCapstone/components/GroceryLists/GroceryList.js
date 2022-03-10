import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-native";
import { selectItemList } from "../../state/itemSlice";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { selectGroceryList } from "../../state/listSlice";
import { removeItem } from '../../actions/items'
import UpdateItemModal from "./UpdateItemModal";

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const GroceryList = ({ index, allStores }) => {

    const listInfo = useSelector(selectGroceryList);
    const allItems = useSelector(selectItemList);
    const dispatch = useDispatch();

    let sum = 0

    allItems.forEach(function (i) {
        if (i.listName === listInfo[index].listName) {
            sum += i.price;
        }
    })

    let groupByStore = allItems.reduce((r, a) => {
        r[a.storeName] = [...r[a.storeName] || [], a];
        return r;
    }, {});

    const [storeList, setStoreList] = useState(groupByStore)
    
    
    console.log("store", storeList[0])


    console.log("items", allItems)


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

    const RenderItem = ({ item }) => {

        console.log("item", item)

        return (
            <>
                {/* {listInfo[index].listName === item.listName ? //place items into separate lists */}
                    <>
                        <View>
                        <FlatList
                            data={item}
                            // ListEmptyComponent={ListEmptyComponent}
                            renderItem={({ item }) => <StoreRenderItem store={item} />}
                            keyExtractor={(item) => String(item._id)}
                        />
                        <Text>
                            test
                        </Text>
                        </View>
                    </>
                    {/* :
                    null
                } */}
            </>
        )
    }

    const StoreRenderItem = ({ item }) => {

        console.log("test")

        return (
            <>

                    <>
                        <View>
                        <Text>
                            hello
                        </Text>
                        </View>
                    </>
            </>
        )
    }

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
                            // ListEmptyComponent={ListEmptyComponent}
                            renderItem={StoreRenderItem}
                            // keyExtractor={(item) => String(item._id)}
                        />
                    </View>

                <View style={groceryList.container}>
                    <View style={groceryList.storeContainer}>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: 330,
        height: 35,
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