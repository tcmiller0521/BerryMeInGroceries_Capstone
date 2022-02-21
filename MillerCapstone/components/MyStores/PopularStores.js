import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'

const DATA = [
    {
        id: 1,
        key: "storeOne",
        title: "Target"
    },
    {
        id: 2,
        key: "storeTwo",
        title: "Walmart"
    },
    {
        id: 3,
        key: "storeThree",
        title: "King Soopers"
    },
    {
        id: 4,
        key: "storeFour",
        title: "Sam's Club"
    },
    {
        id: 5,
        key: "storeFive",
        title: "Costco"
    },
    {
        id: 6,
        key: "storeSix",
        title: "Albertsons"
    },
]

let colors = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1"]

const PopularStores = ({ navigation }) => {

    return (
        <>
            <View style={popularStores.container}>
                <Text style={popularStores.listHeader}>
                    Popular Stores
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
                                <View style={[{ backgroundColor: colors[index % colors.length] }, popularStores.listItem]}>
                                    <Text style={popularStores.itemText}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </>
    )
}

const popularStores = StyleSheet.create({
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
        borderRadius: 100 / 5,
        justifyContent: "center"
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
    itemText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Coolvetica-Regular",
        fontSize: 20
    }
})

export default PopularStores;