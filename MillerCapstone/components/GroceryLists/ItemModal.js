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
import { createItemList } from "../../actions/items";
import { selectGroceryList } from "../../state/listSlice";
import { Picker } from '@react-native-picker/picker'
import { selectItemList } from "../../state/itemSlice";
import { editBudget } from "../../actions/budget";
import { selectBudgetList } from "../../state/budgetSlice";

const ItemModal = ({ setCurrentItemId, currentItemId, index, allStores }) => {
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
        setItemData({ item: "", price: "", listName: listInfo[index].listName });
    }

    const allItems = useSelector(selectItemList);

    let sum = 0

    allItems.forEach(function (i) {
        if (i.listName === listInfo[index].listName) {
            sum += i.price;
        }
    })

    const [budgetInfo, setBudgetInfo] = useState()
    const budgetData = useSelector(selectBudgetList)

    const budget = budgetData.find(budget => budget.budgetName === listInfo[index].budgetName)
    console.log(budget.remaining)

    const handleChange = () => {
        setBudgetInfo({
            ...budgetInfo,
            [budget.spent]: sum
        })
    }

    const updateBudget = () => {
            dispatch(editBudget(budgetInfo))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItemList(itemData));
        handleChange();
        updateBudget();
        setModalVisible(!modalVisible);
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
                        <Text style={itemModal.modalText}>Add Item</Text>
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
                                    Add to list
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
                <Text style={itemModal.textStyle}>+ Add Item</Text>
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

export default ItemModal;