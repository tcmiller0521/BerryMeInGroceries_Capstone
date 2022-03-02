import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { selectGroceryList } from "../../state/listSlice";


const ItemBanner = ({ navigation, index }) => {

    const listInfo = useSelector(selectGroceryList);
    console.log(listInfo[index])
    console.log(index)

    return (
        <>
            <View style={itemBanner.container}>
                    <Text style={itemBanner.headerText}>
                        {listInfo[index].listName}
                    </Text>
            </View>
        </>
    )
}

const itemBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#1B1F22",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
    }

})

export default ItemBanner;