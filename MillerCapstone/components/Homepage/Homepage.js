import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import HomepageBanner from "./HomepageBanner";
import HomepageBudget from "./HomepageBudget";
import HomepageLists from "./HomepageLists";
import HomepageCards from "./HomepageCards";

const Homepage = () => {
    return (
        <>
            <View style={homepage.container}>
                <HomepageBanner />
                <HomepageBudget />
                <HomepageLists />
                <HomepageCards />
            </View>
        </>
    )
}

const homepage = StyleSheet.create({
    container: {
        height: 1080,
        backgroundColor: "#2D3339"
    }

})

export default Homepage;