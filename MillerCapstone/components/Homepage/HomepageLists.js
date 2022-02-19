import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import { useSelector } from "react-redux";
import { selectGroceryList } from "../../state/listSlice";
import ListModal from "../Lists/ListModal";

const DATA = []

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const HomepageLists = ({ navigation }) => {

    const allLists = useSelector(selectGroceryList)

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={homepageLists.noList}>
                    <Text style={homepageLists.listText}>
                        No Lists Here
                    </Text>
                </View>
            </>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View>
            <TouchableOpacity
                key={item._id}
                onPress={() => navigation.navigate('GroceryList')}
            >
                <View style={[{ backgroundColor: colors[index % colors.length] }, homepageLists.listItem]}>
                    <Text style={homepageLists.listText}>{item.listName}</Text>
                </View>
            </TouchableOpacity>
        </View>
        )
    }

    return (
        <>
            <View style={homepageLists.container}>
                <Text style={homepageLists.listHeader}>
                    My Lists
                </Text>
                <View>
                    <FlatList
                        data={allLists}
                        horizontal={true}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item._id)}
                    />
                </View>
            </View>
            <View style={homepageLists.newListContainer}>
               <ListModal />
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
        borderRadius: 100 / 5,
        justifyContent: "center",
        alignContent: "center"
    },
    listText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Coolvetica-Regular",
    },
    noList: {
        height: 125,
        width: 300,
        justifyContent: "center",
        alignContent: "center"
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