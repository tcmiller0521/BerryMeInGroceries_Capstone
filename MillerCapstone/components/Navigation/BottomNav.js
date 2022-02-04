import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import HomeIcon from '../../Assets/images/HomeIcon.png';


const BottomNav = ({navigation}) => {

    return (
        <>
            <View style={bottomNav.container}>
                <TouchableOpacity style={bottomNav.userContainer}
                onPress={() => navigation.navigate('Homepage')}
                >
                    <Image 
                    style={bottomNav.navIcon}
                    source={require("../../Assets/images/HomeIcon.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={bottomNav.userContainer}
                onPress={() => navigation.navigate('Lists')}
                >
                    <Image 
                    style={bottomNav.tallIcon}
                    source={require("../../Assets/images/ListIcon.png")} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={bottomNav.userContainer}
                onPress={() => navigation.navigate('Budget')}
                >
                    <Image 
                    style={bottomNav.tallIcon}
                    source={require("../../Assets/images/BudgetIcon.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={bottomNav.userContainer}
                onPress={() => navigation.navigate('Wallet')}
                >
                    <Image 
                    style={bottomNav.navIcon}
                    source={require("../../Assets/images/WalletIcon.png")}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const bottomNav = StyleSheet.create({
    container: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        height: 70,
        width: '100%',
        backgroundColor: "#1B1F22",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
    userContainer: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
    },
    navIcon: {
        height: 40,
        width: 40,
    },
    tallIcon: {
        height: 40,
        width: 31,
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
    }

})

export default BottomNav;