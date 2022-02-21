import React, { useEffect, useState } from "react";
import { Alert, 
        Modal, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity, 
        TextInput, 
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createCard } from "../../actions/card";
import { selectCardList } from "../../state/cardSlice";


const CardModal = ({ setCurrentCardId, currentCardId }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cardData, setCardData] = useState({ cardName: "", cardNumber: "" });
    const dispatch = useDispatch();  

    const allCards = useSelector(selectCardList);
    const foundCard = (currentCardId ? allLists.find((card) => card._id === currentCardId) : null)

    useEffect(() => {
        if (foundCard) setText(foundCard)
    }, [foundCard])

    const clear = () => {
        setCardData({ cardName: "", cardNumber: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCard(cardData))
        setModalVisible(!modalVisible)
        clear();
    }
    
    return (
        <View style={cardModal.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={cardModal.centeredView}>
                    <View style={cardModal.modalView}>
                        <Text style={cardModal.modalText}>New Card</Text>
                        <View style={cardModal.inputView}>
                            <TextInput
                                placeholder="Store Name"
                                name="cardName"
                                style={cardModal.input}
                                value={cardData.cardName}
                                onChangeText={(text) => setCardData({...cardData, cardName: text})}
                            />
                            <TextInput
                                placeholder="Card Number"
                                name="cardNumber"
                                style={cardModal.input}
                                value={cardData.cardNumber}
                                onChangeText={(text) => setCardData({...cardData, cardNumber: text})}
                            />
                            <TouchableOpacity
                               
                               onPress={handleSubmit}
                                style={[cardModal.button, cardModal.buttonClose]}
                            >
                                <Text style={cardModal.textStyle}>
                                    Add Card
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[cardModal.button, cardModal.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={cardModal.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[cardModal.button, cardModal.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={cardModal.textStyle}>+ Add Card</Text>
            </TouchableOpacity>
        </View>
    );
};

const cardModal = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#1B1F22",
        width: 325,
        height: 340,
        borderRadius: 100 / 2,
        alignItems: "center",
        elevation: 5
    },
    dropDownMenu: {
        width: 275,
        marginBottom: 20,
    },
    dropDownContainerStyle: {
        backgroundColor: "#fff",
        width: 275
    },
    labelStyle: {
        fontFamily: "Roboto-Regular",
        color: "#1B1F22"
    },
    button: {
        borderRadius: 100 / 2,
        justifyContent: "center",
    },
    buttonOpen: {
        backgroundColor: "#363E44",
        width: 300,
        height: 50,
    },
    buttonClose: {
        backgroundColor: "#363E44",
        width: 275,
        height: 45,
        marginBottom: 15
    },
    textStyle: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Coolvetica-Regular",
        fontSize: 22,
        borderRadius: 100 / 2
    },
    modalText: {
        marginBottom: 15,
        marginTop: 20,
        textAlign: "center",
        color: "#fff",
        fontFamily: "Coolvetica-Regular",
        fontSize: 25,
        borderRadius: 100 / 2
    },
    inputView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        marginBottom: 15,
        textAlign: "center",
        height: 40,
        width: 275,
        backgroundColor: "#fff",
        borderRadius: 100 / 5,
    },
});

export default CardModal;