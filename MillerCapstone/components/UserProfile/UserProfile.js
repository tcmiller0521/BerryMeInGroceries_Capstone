import React from "react";
import { View, Text, StyleSheet } from "react-native";

import UserInfo from "./UserInfo";
import UserOptions from "./UserOptions";

const UserProfile = ({ navigation }) => {

    return (
        <>
            <View style={userProfile.container}>
                <UserInfo />
                <UserOptions navigation={navigation}/>
            </View>
        </>
    )
}

const userProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default UserProfile;