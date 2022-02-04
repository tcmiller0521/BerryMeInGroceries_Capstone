import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import BottomNav from "../Navigation/BottomNav";
import Cards from "./Cards";
import WalletBanner from "./WalletBanner";

const WalletPage = ({ navigation }) => {
    return (
        <>
            <View style={walletPage.container}>
                <WalletBanner />
                <Cards navigation={navigation}/>
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