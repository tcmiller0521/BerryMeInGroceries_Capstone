import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectStoreList } from "../../state/storeSlice";
import StoreModal from "./StoreModal";
import Swipeable from 'react-native-gesture-handler/Swipeable';


const DATA = [
    {
        id: 1,
        title: "First Item"
    },
    {
        id: 2,
        title: "Second Item"
    },
    {
        id: 3,
        title: "Third Item"
    },
    {
        id: 4,
        title: "Third Item"
    }
]

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const FavStores = ({ navigation, setCurrentStoreId, currentStoreId }) => {

    const allStores = useSelector(selectStoreList);

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={favStores.noItem}>
                    <Text style={favStores.noItemText}>
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
                    <View style={favStores.deleteContainer}>
                        <Text style={favStores.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(removeList((item) => String(item._id)))}>
                    <View style={favStores.editContainer}>
                        <Text style={favStores.swipeText}>
                            Edit
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <>
                <Swipeable renderRightActions={RenderRight}>
                    <View style={favStores.itemContainer}>
                        <TouchableOpacity
                            key={item.key}
                            onPress={() => navigation.navigate('Wallet')}
                        >
                            <View style={[{ backgroundColor: colors[index % colors.length] }, favStores.listItem]}>
                                <Text style={favStores.listText}>{item.storeName}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Swipeable>
            </>
        )
    }

    return (
        <>
            <View style={favStores.headerContainer}>
                <Text style={favStores.headerText}>
                    Favorite Stores
                </Text>
            </View>
            <View style={favStores.storesContainer}>
                <View style={favStores.storesContainer}>
                    <FlatList
                        data={allStores}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item._id)}
                    />
                </View>
            </View>
            <View style={favStores.newListContainer}>
                <StoreModal setCurrentStoreId={setCurrentStoreId} currentStoreId={currentStoreId} />
            </View>
        </>
    )
}

const favStores = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 500
    },
    storesContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 250
    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Coolvetica-Regular",
        textAlign: "center"
    },
    headerContainer: {
        marginBottom: 5,
        marginTop: 25
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
        fontSize: 22,
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
        marginTop: 10,
        marginRight: 10
    },
    swipeText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "Coolvetica-Regular"
    }
})

export default FavStores;