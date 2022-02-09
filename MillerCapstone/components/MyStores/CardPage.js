import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import BottomNav from "../Navigation/BottomNav";
import CardBanner from "./CardBanner";
import RewardsCard from "./RewardsCard";

const CardPage = ({ navigation }) => {
    return (
        <>
            <View style={cardPage.container}>
                <CardBanner navigation={navigation}/>
                <RewardsCard />
                <BottomNav navigation={navigation} />
            </View>
        </>
    )
}

const cardPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default CardPage;