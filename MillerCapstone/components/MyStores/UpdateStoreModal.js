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
import { createStore, editStore } from "../../actions/store";
import { selectStoreList } from "../../state/storeSlice";


const UpdateStoreModal = ({ setCurrentStoreId, currentStoreId }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [storeData, setStoreData] = useState({ storeName: "" });
    const dispatch = useDispatch();  

    const clear = () => {
        setStoreData({ storeName: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editStore(currentStoreId, storeData))
        setModalVisible(!modalVisible)
        clear();
    }
    
    return (
        <View style={storeModal.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={storeModal.centeredView}>
                    <View style={storeModal.modalView}>
                        <Text style={storeModal.modalText}>Edit Store</Text>
                        <View style={storeModal.inputView}>
                            <TextInput
                                placeholder="Store Name"
                                name="cardName"
                                style={storeModal.input}
                                value={storeData.storeName}
                                onChangeText={(text) => setStoreData({...storeData, storeName: text})}
                            />
                            <TouchableOpacity
                               onPress={handleSubmit}
                                style={[storeModal.button, storeModal.buttonClose]}
                            >
                                <Text style={storeModal.textStyle}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[storeModal.button, storeModal.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={storeModal.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[storeModal.button, storeModal.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={storeModal.swipeText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const storeModal = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    modalView: {
        marginTop: 100,
        margin: 20,
        backgroundColor: "#1B1F22",
        width: 325,
        height: 275,
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
        height: 65,
        width: 75,
        backgroundColor: '#363E44',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 10,
        marginRight: 10
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
    swipeText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "Coolvetica-Regular"
    }
});

export default UpdateStoreModal;