import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BottomNav from "../Navigation/BottomNav";
import GroceryList from "./GroceryList";
import ItemBanner from "./ItemBanner";
import ItemBudget from "./ItemBudget";
import ItemModal from "./ItemModal";
import { retrieveItems } from "../../actions/items";
import { useRoute } from "@react-navigation/native";

const ItemPage = ({ navigation, setCurrentItemId, currentItemId }) => {

    const route = useRoute();
    const index = route.params.index

    return (
        <>
            <View style={itemPage.container}>
                <ItemBanner navigation={navigation} index={index} />
                <ItemBudget />
                <GroceryList index={index} />
                <ItemModal currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} index={index} />
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