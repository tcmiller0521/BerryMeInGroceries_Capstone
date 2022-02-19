import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLists } from "../../actions/lists";
import { selectGroceryList } from "../../state/listSlice";
import GroceryList from "./GroceryList";
import ListModal from "./ListModal";

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const Lists = ({ navigation, setCurrentListId, currentListId }) => {

    const allLists = useSelector(selectGroceryList);

    const ListEmptyComponent = ({data}) => {
        return (
            <>
                <View>
                    <Text style={lists.listText}>
                        No Lists Here
                    </Text>
                </View>
            </>
        )
    }

    const renderItem = ({item, index}) => {

        return (
            <View>
                <TouchableOpacity
                    key={item._id}
                    onPress={() => navigation.navigate('Wallet')}
                >
                    <View style={[{ backgroundColor: colors[index % colors.length] }, lists.listItem]}>
                        <Text style={lists.listText}>{item.listName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <View style={lists.modalContainer}>
                <ListModal setCurrentListId={setCurrentListId} currentListId={currentListId} />
            </View>
            <View style={lists.container}>
                <FlatList
                    data={allLists}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item._id)}
                />
            </View>
        </>
    )
}

const lists = StyleSheet.create({
    container: {
        alignItems: "center",
        height: 475,
        marginBottom: 70
    },
    modalContainer: {
        marginTop: 40,
        marginBottom: 25
    },
    listHeader: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "left",
    },
    listItem: {
        margin: 10,
        marginLeft: 0,
        height: 65,
        width: 300,
        borderRadius: 100 / 2,
        justifyContent: "center",
    },
    listText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Coolvetica-Regular"
    },
    newListContainer: {
        marginTop: 30,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    newListButton: {
        backgroundColor: "#363E44",
        width: 300,
        height: 50,
        borderRadius: 100 / 4,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default Lists;