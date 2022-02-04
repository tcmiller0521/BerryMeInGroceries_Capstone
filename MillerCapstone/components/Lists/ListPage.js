import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import BottomNav from "../Navigation/BottomNav";
import ListBanner from "./ListBanner";
import Lists from "./Lists";

const ListPage = ({ navigation }) => {
    return (
        <>
            <View style={listPage.container}>
                <ListBanner />
                <Lists navigation={navigation}/>
                <BottomNav navigation={navigation}/>
            </View>
        </>
    )
}

const listPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default ListPage;