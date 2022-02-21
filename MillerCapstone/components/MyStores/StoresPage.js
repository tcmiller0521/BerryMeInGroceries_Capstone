import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet } from 'react-native'
import { retrieveStores } from "../../actions/store";

import BottomNav from "../Navigation/BottomNav";
import FavStores from "./FavStores";
import PopularStores from "./PopularStores";
import StoresBanner from "./StoresBanner";

const StoresPage = ({ navigation }) => {

    const [currentStoreId, setCurrentStoreId] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveStores())
    }, [currentStoreId, dispatch])

    return (
        <>
            <View style={storesPage.container}>
                <StoresBanner />
                <FavStores navigation={navigation} setCurrentStoreId={setCurrentStoreId} currentStoreId={currentStoreId} />
                <PopularStores />
                <BottomNav navigation={navigation} />
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