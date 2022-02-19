import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectGroceryList } from "../../state/listSlice";

const GroceryList = ({allLists}) => {

    return (
            <View>
                    <TouchableOpacity
                        key={allLists._id}
                        onPress={() => navigation.navigate('Wallet')}
                    >
                        <View style={lists.listItem}>
                            <Text style={lists.listText}>{allLists.listName}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        )
}

const lists = StyleSheet.create({
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

export default GroceryList;