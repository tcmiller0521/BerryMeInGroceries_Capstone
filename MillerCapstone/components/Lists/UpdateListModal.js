import React, { useState } from "react";
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
import { editList } from "../../actions/lists";



const UpdateListModal = ({ setCurrentListId, currentListId }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [listData, setListData] = useState({ listName: "" });
    const dispatch = useDispatch();  

    const clear = () => {
        setListData({ listName: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editList(currentListId, listData))
        setModalVisible(!modalVisible)
        clear();
    }
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Edit list</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                placeholder="List Name"
                                name="listName"
                                style={styles.input}
                                value={listData.listName}
                                onChangeText={(text) => setListData({...listData, listName: text})}
                            />
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
                <Text style={styles.swipeText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        alignItems: "center"
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
            marginTop: 10
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

export default UpdateListModal;