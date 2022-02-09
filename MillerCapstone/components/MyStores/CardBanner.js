import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const CardBanner = ({ navigation }) => {

    return (
        <>
            <View style={cardBanner.container}>
                <TouchableOpacity style={cardBanner.userContainer}
                onPress={() => navigation.navigate('Profile')}
                >
                    <Image style={cardBanner.userPic}
                    source={require('../../Assets/images/BackArrow.png')}
                    />
                    <Text style={cardBanner.headerText}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const cardBanner = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#1B1F22",
        alignItems: "center"
    },
    userContainer: {
        marginLeft: 25,
        display: "flex",
        flexDirection: "row"
    },
    userPic: {
        height: 25,
        width: 50,
    },
    textContainer: {
        flexDirection: "row",
        flexGrow: 1,
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
        marginLeft: 10
    }

})

export default CardBanner;