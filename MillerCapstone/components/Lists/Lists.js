import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLists } from "../../actions/lists";
import { selectGroceryList } from "../../state/listSlice";
import { removeList } from "../../actions/lists";
import ListModal from "./ListModal";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import UpdateListModal from "./UpdateListModal";


let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const Lists = ({ navigation, setCurrentListId, currentListId }) => {

    const allLists = useSelector(selectGroceryList);
    const dispatch = useDispatch();

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

    const RenderItem = ({ list, index }) => {

        return (
            <Swipeable renderRightActions={() => <RenderRight list={list} />}>
                <View>
                    <TouchableOpacity
                        key={list._id}
                        onPress={() => navigation.navigate('GroceryList', {index: index })}
                    >
                        <View style={[{ backgroundColor: colors[index % colors.length] }, lists.listItem]}>
                            <Text style={lists.listText}>{list.listName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Swipeable>
        )
    }

    const RenderRight = ({ list }) => {


        const handleDelete = () => {
            dispatch(removeList(list._id))
        }

        return (
            <>
                <TouchableOpacity onPress={handleDelete}>
                    <View style={lists.deleteContainer}>
                        <Text style={lists.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <UpdateListModal currentListId={list._id} />
            </>
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
                    renderItem={({ item, index }) => <RenderItem list={item} index={index} />}
                    keyExtractor={(item, index) => String(item._id)}
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