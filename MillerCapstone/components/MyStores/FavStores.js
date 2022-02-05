import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";


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

const FavStores = ({ navigation }) => {

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
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={item.key}
                                onPress={() => navigation.navigate('Wallet')}
                            >
                                <View style={[{ backgroundColor: colors[index % colors.length] }, favStores.listItem]}>
                                    <Text style={favStores.listText}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={favStores.newListContainer}>
                <TouchableOpacity style={favStores.newListButton}>
                    <Text style={favStores.listHeader}>
                        + New List
                    </Text>
                </TouchableOpacity>
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
})

export default FavStores;