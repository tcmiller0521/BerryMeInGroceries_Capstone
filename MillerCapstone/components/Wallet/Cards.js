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
        title: "Fourth Item"
    },
    {
        id: 5,
        title: "Fifth Item"
    },
    {
        id: 6,
        title: "Sixth Item"
    },
    {
        id: 7,
        title: "Sixth Item"
    },
]

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const Cards = ({ navigation }) => {

    return (
        <>
            <View style={cards.newListContainer}>
                <TouchableOpacity style={cards.newListButton}>
                    <Text style={cards.listHeader}>
                        + New Card
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={cards.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={item.key}
                            onPress={() => navigation.navigate('Wallet')}
                        >
                            <View style={[{ backgroundColor: colors[index % colors.length] }, cards.listItem]}>
                                <Text style={cards.listText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

const cards = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 500
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

export default Cards;