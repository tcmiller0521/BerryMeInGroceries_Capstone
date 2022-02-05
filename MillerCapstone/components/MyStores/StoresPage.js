import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import BottomNav from "../Navigation/BottomNav";
import FavStores from "./FavStores";
import PopularStores from "./PopularStores";
import StoresBanner from "./StoresBanner";

const StoresPage = ({ navigation }) => {
    return (
        <>
            <View style={storesPage.container}>
                <StoresBanner />
                <FavStores navigation={navigation}/>
                <PopularStores />
                <BottomNav navigation={navigation}/>
            </View>
        </>
    )
}

const storesPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default StoresPage;