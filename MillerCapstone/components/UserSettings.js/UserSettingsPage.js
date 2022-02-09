import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserInfo from "../UserProfile/UserInfo";
import UpdateUserInfo from "./UpdateUserInfo";
import UserSettingsBanner from "./UserSettingsBanner";


const UserSettings = ({ navigation }) => {

    return (
        <>
            <View style={userSettings.container}>
                <UserSettingsBanner navigation={navigation}/>
                <UserInfo />
                <UpdateUserInfo />
            </View>
        </>
    )
}

const userSettings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D3339"
    }

})

export default UserSettings;