import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'

const DATA = [
    {
        id: 1,
        key: "item1",
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

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const HomepageLists = ({ navigation }) => {

    return (
        <>
            <View style={homepageLists.container}>
                <Text style={homepageLists.listHeader}>
                    My Lists
                </Text>
                <View>
                    <FlatList
                        data={DATA}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={item.key}
                                onPress={() => navigation.navigate('Wallet')}
                            >
                                <View style={[{ backgroundColor: colors[index % colors.length] }, homepageLists.listItem]}>
                                    <Text >{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={homepageLists.newListContainer}>
                <TouchableOpacity style={homepageLists.newListButton}>
                    <Text style={homepageLists.listHeader}>
                        + New List
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const homepageLists = StyleSheet.create({
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
        height: 115,
        width: 115,
        borderRadius: 100 / 5
    },
    newListContainer: {
        margin: 5,
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

export default HomepageLists;