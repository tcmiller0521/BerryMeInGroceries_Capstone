import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux";
import { selectCardList } from "../../state/cardSlice";

let colors = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1",]

const HomepageCards = ({ navigation }) => {

    const allCards = useSelector(selectCardList)

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={homepageCards.noItem}>
                    <Text style={homepageCards.noItemText}>
                        No Items Yet
                    </Text>
                </View>
            </>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={homepageCards.itemContainer}>
                    <TouchableOpacity
                        key={item.key}
                        onPress={() => navigation.navigate('Card')}
                    >
                        <View style={[{ backgroundColor: colors[index % colors.length] }, homepageCards.listItem]}>
                            <Text >{item.cardName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    return (
        <>
            <View style={homepageCards.container}>
                <Text style={homepageCards.listHeader}>
                    My Cards
                </Text>
                <View>
                    <FlatList
                        data={allCards}
                        horizontal={true}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={renderItem}
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

export default HomepageCards;