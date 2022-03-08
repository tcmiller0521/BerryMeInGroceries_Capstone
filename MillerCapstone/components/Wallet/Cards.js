import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCardList } from "../../state/cardSlice";
import CardModal from "./CardModal";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { removeCard } from "../../actions/card";
import UpdateCardModal from "./UpdateCardModal";

let colors = ["#FFC4D1", "#F185B3", "#A75889", "#7B6A9B", "#4F7CAC", "#5DD39E"]

const Cards = ({ navigation, currentCardId, setCurrentCardId }) => {

    const dispatch = useDispatch();
    const allCards = useSelector(selectCardList)

    const ListEmptyComponent = () => {
        return (
            <>
                <View style={cards.noItem}>
                    <Text style={cards.noItemText}>
                        No Items Yet
                    </Text>
                </View>
            </>
        )
    }

    const RenderRight = ({item}) => {

        const handleDelete = () => {
            dispatch(removeCard(item._id))
        }

        return (
            <>
                <TouchableOpacity onPress={handleDelete}>
                    <View style={cards.deleteContainer}>
                        <Text style={cards.swipeText}>
                            Delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <UpdateCardModal currentCardId={item._id}/>
            </>
        )
    }

    const RenderItem = ({ item, index }) => {
        return (
            <>
                <Swipeable renderRightActions={() => <RenderRight item={item}/> }>
                    <View>
                        <TouchableOpacity
                            key={item._id}
                            onPress={() => navigation.navigate('Wallet')}
                        >
                            <View style={[{ backgroundColor: colors[index % colors.length] }, cards.listItem]}>
                                <Text style={cards.listText}>{item.cardName}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Swipeable>
            </>
        )
    }

    return (
        <>
            <View style={cards.newListContainer}>
                <CardModal setCurrentCardId={setCurrentCardId} currentListId={currentCardId} />
            </View>
            <View style={cards.container}>
                <FlatList
                    data={allCards}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={({item, index}) => <RenderItem item={item} index={index} />}
                    keyExtractor={(item) => String(item._id)}
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

export default Cards;