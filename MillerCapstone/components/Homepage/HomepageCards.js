import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

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
]

let colors = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1",  ]

const HomepageCards = () => {

    return (
        <>
            <View style={homepageCards.container}>
                <Text style={homepageCards.listHeader}>
                    My Cards
                </Text>
                <View>
                    <FlatList
                        data={DATA}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <View style={[{ backgroundColor: colors[index % colors.length] }, homepageCards.listItem]}>
                                <Text >{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={homepageCards.newListContainer}>
                <TouchableOpacity style={homepageCards.newListButton}>
                    <Text style={homepageCards.listHeader}>
                        + New Card
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const homepageCards = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 40
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
        height: 125,
        width: 125,
        borderRadius: 100 / 5
    },
    newListContainer: {
        margin: 5,
        justifyContent: "center",
        alignItems:"center",
    },
    newListButton: {
        backgroundColor: "#363E44",
        width: 300,
        height: 50,
        borderRadius: 100/4,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default HomepageCards;