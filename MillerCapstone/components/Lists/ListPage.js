import React, { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import BottomNav from "../Navigation/BottomNav";
import ListBanner from "./ListBanner";
import ListModal from "./ListModal";
import Lists from "./Lists";

const ListPage = ({ navigation, setCurrentListId, currentListId }) => {


    return (
        <>
            <View style={listPage.container}>
                <ListBanner />
                <Lists navigation={navigation} setCurrentListId={setCurrentListId} currentListId={currentListId}/>
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