import React, { useRef, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Keyboard,
    FlatList
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../../actions/items";
import { selectGroceryList } from "../../state/listSlice";
import { Picker } from '@react-native-picker/picker'

const UpdateItemModal = ({ setCurrentItemId, currentItemId, index, allStores }) => {
    const dispatch = useDispatch();
    const pickerRef = useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const listInfo = useSelector(selectGroceryList);
    const [itemData, setItemData] = useState({ item: "", price: "", storeName: "", listName: listInfo[index].listName });

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    const clear = () => {
        setItemData({ item: "", price: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editItem(currentItemId, itemData))
        setModalVisible(!modalVisible)
        clear();
    }


    return (
        <View style={itemModal.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={itemModal.centeredView}>
                    <View style={itemModal.modalView}>
                        <Text style={itemModal.modalText}>Edit Item</Text>
                        <View style={itemModal.inputView}>
                            <TextInput
                                placeholder="Item Name"
                                name="listName"
                                style={itemModal.input}
                                value={itemData.item}
                                onChangeText={(text) => setItemData({ ...itemData, item: text })}
                            />
                            <TextInput
                                placeholder="Item Price"
                                name="price"
                                keyboardType="numeric"
                                style={itemModal.input}
                                value={itemData.price}
                                onChangeText={(text) => setItemData({ ...itemData, price: text })}
                            />
                            <Picker
                                ref={pickerRef}
                                selectedValue={itemData.storeName}
                                style={itemModal.dropDownMenu}
                                onValueChange={(value, itemIndex) =>
                                    setItemData({ ...itemData, storeName: value })}
                            >
                                <Picker.Item label="Select a store" value={null} />
                                {allStores.map((store, i) => (
                                    <Picker.Item key={i} label={store.storeName} value={store.storeName} />
                                ))}
                            </Picker>
                            <TouchableOpacity

                                onPress={handleSubmit}
                                style={[itemModal.button, itemModal.buttonClose]}
                            >
                                <Text style={itemModal.textStyle}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[itemModal.button, itemModal.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={itemModal.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[itemModal.button, itemModal.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={itemModal.swipeText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const itemModal = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#1B1F22",
        width: 325,
        height: 400,
        borderRadius: 100 / 2,
        alignItems: "center",
        elevation: 5
    },
    dropDownMenu: {
        width: 275,
        marginBottom: 20,
        backgroundColor: "#fff",
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
        height: 30,
        width: 75,
        backgroundColor: '#363E44',
        borderRadius: 100 / 2,
        alignContent: "center",
        justifyContent: "center",
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

export default UpdateItemModal;