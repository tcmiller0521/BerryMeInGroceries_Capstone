import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import HomepageBanner from "./HomepageBanner";
import HomepageBudget from "./HomepageBudget";
import HomepageLists from "./HomepageLists";
import HomepageCards from "./HomepageCards";
import BottomNav from "../Navigation/BottomNav";
import { useRoute } from "@react-navigation/native";

const Homepage = ({navigation}) => {


    return (
        <>
            <SafeAreaView style={homepage.container}>
                <HomepageBanner navigation={navigation}/>
                <HomepageBudget />
                <HomepageLists navigation={navigation} />
                <HomepageCards navigation={navigation}/>
                <BottomNav navigation={navigation} />
            </SafeAreaView>
        </>
    )
}

const homepage = StyleSheet.create({
    container: {
        backgroundColor: "#2D3339",
        flex: 1
    }

})

export default Homepage;