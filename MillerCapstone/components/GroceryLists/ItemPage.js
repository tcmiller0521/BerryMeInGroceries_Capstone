import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNav from "../Navigation/BottomNav";
import GroceryList from "./GroceryList";
import ItemBanner from "./ItemBanner";
import ItemBudget from "./ItemBudget";

const ItemPage = ({ navigation }) => {

    return (
        <>
            <View style={itemPage.container}>
                <ItemBanner navigation={navigation}/>
                <ItemBudget />
                <GroceryList />
                <BottomNav navigation={navigation}/>
            </View>
        </>
    )
}

const itemPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default ItemPage;