import React, { useEffect, useRef, useState } from "react";
import { Alert, 
        Modal, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity, 
        TextInput, 
        Keyboard
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createGroceryList } from "../../actions/lists";
import { selectGroceryList } from "../../state/listSlice";
import { Picker } from '@react-native-picker/picker'
import {selectBudgetList} from '../../state/budgetSlice';

const ListModal = ({ setCurrentListId, currentListId }) => {
    const dispatch = useDispatch();
    const pickerRef = useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const [listData, setListData] = useState({ listName: "", budgetName: "" });  
    const allBudgets = useSelector(selectBudgetList);

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    const clear = () => {
        setListData({ listName: "", budgetName: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createGroceryList(listData))
        setModalVisible(!modalVisible)
        clear();
    }
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>New List</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                placeholder="List Name"
                                name="listName"
                                style={styles.input}
                                value={listData.listName}
                                onChangeText={(text) => setListData({...listData, listName: text})}
                            />
                            <Picker 
                            ref={pickerRef}
                            selectedValue={listData.budgetName}
                            style={styles.dropDownMenu}
                            onValueChange={(value, itemIndex) => 
                            setListData({...listData, budgetName: value })}
                            >
                                <Picker.Item label="Select a budget" value={null} />
                                {allBudgets.map((budget, i) => (
                                    <Picker.Item key={i} label={budget.budgetName} value={budget.budgetName} />
                                ))}
                            </Picker>
                            <TouchableOpacity
                               
                               onPress={handleSubmit}
                                style={[styles.button, styles.buttonClose]}
                            >
                                <Text style={styles.textStyle}>
                                    Create List
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>+ Add List</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default ListModal;