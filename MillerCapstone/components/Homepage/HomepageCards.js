import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux";
import { selectCardList } from "../../state/cardSlice";
import CardModal from "../Wallet/CardModal";

let colors = ["#5DD39E", "#4F7CAC", "#7B6A9B", "#A75889", "#F185B3", "#FFC4D1",]

const HomepageCards = ({ navigation }) => {

    const allCards = useSelector(selectCardList)

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={homepageCards.noItem}>
                    <Text style={homepageCards.noItemText}>
                        No cards yet
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
                        key={item._id}
                        onPress={() => navigation.navigate('Card')}
                    >
                        <View style={[{ backgroundColor: colors[index % colors.length] }, homepageCards.listItem]}>
                            <Text style={homepageCards.listText}>{item.cardName}</Text>
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
                        keyExtractor={(item) => String(item._id)}
                    />
                </View>
            </View>
            <View style={homepageCards.newListContainer}>
                <CardModal />
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
        borderRadius: 100 / 5,
        justifyContent: "center"
    },
    listText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Coolvetica-Regular",
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
    noItemText: {
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    noItem: {
        width: 300,
        height: 115,
        justifyContent: "center"
    }
})

export default HomepageCards;