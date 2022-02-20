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


const ItemPage = ({ navigation, setCurrentItemId, currentItemId }) => {

    return (
        <>
            <View style={itemPage.container}>
                <ItemBanner navigation={navigation}/>
                <ItemBudget />
                <GroceryList />
                <ItemModal currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
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