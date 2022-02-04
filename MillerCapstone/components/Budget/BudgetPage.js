import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import BottomNav from "../Navigation/BottomNav";
import Budget from "./Budget";
import BudgetBanner from "./BudgetBanner";

const BudgetPage = ({ navigation }) => {
    return (
        <>
            <View style={budgetPage.container}>
                <BudgetBanner />
                <Budget />
                <BottomNav navigation={navigation}/>
            </View>
        </>
    )
}

const budgetPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default BudgetPage;