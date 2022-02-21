import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from "react-redux";
import { retrieveCards } from "../../actions/card";

import BottomNav from "../Navigation/BottomNav";
import Cards from "./Cards";
import WalletBanner from "./WalletBanner";

const WalletPage = ({ navigation }) => {

    const [currentCardId, setCurrentCardId] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveCards())
    }, [currentCardId, dispatch])

    return (
        <>
            <View style={walletPage.container}>
                <WalletBanner />
                <Cards navigation={navigation} currentCardId={currentCardId} setCurrentCardId={setCurrentCardId} />
                <BottomNav navigation={navigation} />
            </View>
        </>
    )
}

const walletPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default WalletPage;