import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../Navigation/BottomNav";
import GroceryList from "./GroceryList";
import ItemBanner from "./ItemBanner";
import ItemBudget from "./ItemBudget";
import ItemModal from "./ItemModal";
import { selectStoreList } from "../../state/storeSlice";
import { useRoute } from "@react-navigation/native";

const ItemPage = ({ navigation, setCurrentItemId, currentItemId }) => {

    const route = useRoute();
    const index = route.params.index

    const allStores = useSelector(selectStoreList);

    return (
        <>
            <View style={itemPage.container}>
                <ItemBanner navigation={navigation} index={index} />
                <ItemBudget index={index} />
                <GroceryList index={index} allStores={allStores} />
                <ItemModal currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} index={index} allStores={allStores}/>
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