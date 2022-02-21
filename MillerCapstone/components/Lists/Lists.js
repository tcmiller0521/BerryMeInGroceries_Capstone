import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLists } from "../../actions/lists";
import { selectGroceryList } from "../../state/listSlice";
import { removeList} from "../../actions/lists";
import ListModal from "./ListModal";
import Swipeable from 'react-native-gesture-handler/Swipeable'

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const Lists = ({ navigation, setCurrentListId, currentListId, item }) => {

    const allLists = useSelector(selectGroceryList);
    const dispatch = useDispatch();
    
    
    console.log(allLists)

    const ListEmptyComponent = () => {
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

    const RenderRight = (progress, dragX) => {
        return (
            <>
            <TouchableOpacity onPress={() => dispatch(removeList((allLists) => String(allLists._id)))}>
                <View style={lists.deleteContainer}>
                    <Text style={lists.swipeText}>
                        Delete
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(removeList((item) => String(item._id)))}>
            <View style={lists.editContainer}>
                <Text style={lists.swipeText}>
                    Edit
                </Text>
            </View>
        </TouchableOpacity>
        </>
        )
    }

    const renderItem = ({ item, index }) => {

        return (
            <Swipeable renderRightActions={RenderRight}>
                <View>
                    <TouchableOpacity
                        key={item.key}
                        onPress={() => navigation.navigate('GroceryList')}
                    >
                        <View style={[{ backgroundColor: colors[index % colors.length] }, lists.listItem]}>
                            <Text style={lists.listText}>{item.listName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Swipeable>
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
    deleteContainer: {
        height: 65,
        width: 75,
        backgroundColor: '#CE384E',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 10
    },
    editContainer: {
        height: 65,
        width: 75,
        backgroundColor: '#363E44',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 10
    },
    swipeText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "Coolvetica-Regular"
    }
})

export default Lists;